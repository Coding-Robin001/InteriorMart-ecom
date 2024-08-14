import classes from "./Navbar.module.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const nav__links = [
        {
            path: "add",
            display: "Add Product"
          },
        {
          path: "products",
          display: "Product List"
        },
      ]
      


    return(
        <div className={classes.navbarContainer}>
              <ul className={classes.menu}>
                {nav__links.map((nav, index) => (
                  <li
                    className='nav__item'
                    key={index}
                  >
                    <NavLink
                      to={nav.path}
                      className={(navClass) => navClass.isActive ? classes.navActive : ''}
                    >
                      {nav.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            {/* <h2>product list</h2>
            <h2>add product</h2> */}
        </div>
    )
}


export default Navbar