
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItemToCart(state, action){

            const newItem = action.payload;

            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalAmount++;

            if(!existingItem){
                state.items.push({
                    title: newItem.title,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }else{
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                existingItem.quantity++;
            }
        },
        removeItemFromCart(state, action){

            state.totalAmount--;

            const id = action.payload;

            const item = state.items.find(item => item.id === id);

            if(item.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                item.quantity--;
            }
        },
        showCartItems(state){
            console.log(state.items);
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
