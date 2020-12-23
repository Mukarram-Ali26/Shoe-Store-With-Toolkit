import { createSlice } from '@reduxjs/toolkit';
import Shoe from '../../Shoe.json'
export const counterSlice = createSlice({
  name: 'ShoeStore',

  initialState: {
    value: Shoe,
    cart: []
  },
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload)
    },
    remove: (state, action) => {
      const index = state.cart.findIndex(
        (CI) => CI.keyName === action.payload.keyName
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.keyName}) as its not in cart!`
        );
      }
      state.cart = newCart;
    }



  },
});

export const { add, remove } = counterSlice.actions;

export const selectCount = state => state.shoe;

export default counterSlice.reducer;


// },
    // planting: state => {
    //   state.currentValue = state.value.filter(function (obj) {
    //     if (obj.cat === "planting") {
    //       return obj
    //     }
    //   })
    // },