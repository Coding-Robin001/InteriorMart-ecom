import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
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
        }
    }
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer