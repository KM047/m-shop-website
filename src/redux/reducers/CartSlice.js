import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log(action);
            const { id, quantity = 1, product } = action.payload;
            const existingProduct = state.cartItems.find(
                (item) => item.id === id
            );

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state.cartItems.push({ ...product, quantity });
            }

            state.totalQuantity = state.cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
            );
            state.totalPrice = state.cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingProduct = state.cartItems.find(
                (item) => item.id === id
            );

            if (existingProduct) {
                existingProduct.quantity = quantity;
            }

            state.totalQuantity = state.cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
            );
            state.totalPrice = state.cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );

            state.totalQuantity = state.cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
            );
            state.totalPrice = state.cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
        },

        resetCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, resetCart } =
    cartSlice.actions;

export default cartSlice.reducer;
