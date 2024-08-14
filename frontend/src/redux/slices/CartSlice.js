import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemm: (state, action) => {
        const newItem = action.payload

        const existingItem = state.cartItems.find(item => item.id === newItem.id)

        state.totalQuantity++

        if (!existingItem){
            state.cartItems.push({
                id: newItem.id,
                productName: newItem.productName,
                imgUrl: newItem.imgUrl,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price
            })
        } else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.price) + Number(newItem.price)
        }


        state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price)  * Number(item.quantity)
        }, 0)


    },

    increaseQuantity: (state, action) => {
        let newQuantity = state.totalQuantity + 1;
        state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price)  * Number(item.quantity)
        }, 0)
    },

    decreaseQuantity: (state, action) => {
        state.totalQuantity - 1;
        state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price)  * Number(item.quantity)
        }, 0)
    },


    removeItem: (state, action) => {
        const id = action.payload

        const existingItem = state.cartItems.find(item => item.id === id)

        if (existingItem) {
            state.cartItems = state.cartItems.filter(item => item.id !== id)

            state.totalQuantity = state.totalQuantity - existingItem.quantity
        }

        state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price)  * Number(item.quantity)
        }, 0)

    }
  }
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer