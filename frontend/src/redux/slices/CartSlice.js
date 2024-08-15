import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('cartItems') !== null ?
 JSON.parse(localStorage.getItem('cartItems')) : []

 const totalAmount = localStorage.getItem('totalAmount') !== null ?
 JSON.parse(localStorage.getItem('totalAmount')) : 0

 const totalQuantity = localStorage.getItem('totalQuantity') !== null ?
 JSON.parse(localStorage.getItem('totalQuantity')) : 0


const initialState = {
    cartItems: items,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity
}

function findExistingCartItem(cartItems, itemId) {
    const existingItem = cartItems.find(item => item.id === itemId);
    return existingItem
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = findExistingCartItem(state.cartItems, newItem.id);
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity = existingItem.quantity + 1
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
            console.log(state.totalQuantity);
            
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },

        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find(item => item.id === itemId);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.price) * Number(existingItem.quantity);
                state.totalQuantity++;
            }
            // Recalculate the total amount
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity);
            }, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },

        // Function to decrease the quantity of an item
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find(item => item.id === itemId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                    existingItem.totalPrice = Number(existingItem.price) * Number(existingItem.quantity);
                    state.totalQuantity--;
                } else {
                    // If quantity is 1, remove the item from the cart
                    state.cartItems = state.cartItems.filter(item => item.id !== itemId);
                    state.totalQuantity--;
                }
            }

            // Recalculate the total amount
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity);
            }, 0);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },

        removeItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        }
    }
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer