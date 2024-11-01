import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        // Dodaje item u korpu ili povecav kolicinu ako item vec postoji
        addItem: (state, action) => {
            const addedItem = { ...action.payload };
            addedItem.quantity = addedItem.quantity || 1;

            const existingItemIndex = state.cart.findIndex((item) => item.id === addedItem.id);

            if (existingItemIndex === -1) {
                addedItem.totalPrice = addedItem.price * addedItem.quantity;
                state.cart.push(addedItem);
            } else {
                const existingItem = state.cart[existingItemIndex];
                existingItem.quantity += addedItem.quantity;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },

        // Povecava ili smanjuje kolicinu stavke u korpi na osnovi isIncrease vrednosti
        handleQuantity: (state, action) => {
            const { index, isIncrease } = action.payload;
            const item = state.cart[index];

            if (item) {
                item.quantity = isIncrease ? item.quantity + 1 : Math.max(1, item.quantity - 1);
                item.totalPrice = item.price * item.quantity;
            }
        },

        // Uklanja stavku iz korpe na osnovu indeksa
        removeItem: (state, action) => {
            state.cart.splice(action.payload, 1);
        },
    },
});

export const { addItem, handleQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
