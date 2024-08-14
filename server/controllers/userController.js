const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ users });
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findById(id).populate("posts");
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }

  return res.status(200).json({ user });
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res
        .status(422)
        .json({ message: "please provide username, email and password" });
    }

    if (password.length < 6) {
      return res
        .status(422)
        .json({ message: "password must be more than 6 characters" });
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res
        .status(422)
        .json({ message: "email already used, use another email" });
    }

    const newUser = await User.create({ name, email, password });

    if (!newUser) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }

    if (newUser) {
      // const { _id, name, email } = newUser;
      return res.status(201).json({ newUser});
    } else {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
  } catch (error) {
    return res.json({ messasge: error.message});
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "No user found" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    if (existingUser && isPasswordValid) {
      const { _id } = existingUser;
      return res.status(200).json({ id: _id, msg: "Login Successfull!" });
    } else {
      return res.status(400).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    return res.json({ message: error.message});
  }
};

module.exports = { login, signup, getAllUsers, getUserById };
