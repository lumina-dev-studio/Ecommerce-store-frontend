import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your slice state
interface RightSidebarState {
  sidebarIsopen: boolean;
}

// Initial state
const initialState: RightSidebarState = {
  sidebarIsopen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    // Corrected to match the boolean state type
    setSidebarIsopen: (state, action: PayloadAction<boolean>) => {

      state.sidebarIsopen = action.payload;
    },
  },
});

// Export the action creator and the reducer
export const { setSidebarIsopen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
