import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your slice state
interface AddToCartState {
  addToCartData: any[]; // Define as an array to store cart data
}

// Initial state
const initialState: AddToCartState = {
  addToCartData: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    // Action to update the cart data
    setAddToCartData: (state, action: PayloadAction<any[]>) => {
      state.addToCartData = action.payload; // Assign the new cart data

      
    },
    // Action to clear the cart
    clearCart: (state) => {
      state.addToCartData = []; // Reset the cart data
      localStorage.removeItem("product"); // Remove only the "product" key from localStorage
    },
  },
});

// Export the action creators and the reducer
export const { setAddToCartData, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
