import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your slice state
interface RightSidebarState {
  rightSidebarIsopen: boolean;
}

// Initial state
const initialState: RightSidebarState = {
  rightSidebarIsopen: false,
};

const rightSidebarSlice = createSlice({
  name: "rightSidebar",
  initialState,
  reducers: {
    // Corrected to match the boolean state type
    setRightSidebarIsopen: (state, action: PayloadAction<boolean>) => {

      state.rightSidebarIsopen = action.payload;
    },
  },
});

// Export the action creator and the reducer
export const { setRightSidebarIsopen } = rightSidebarSlice.actions;
export default rightSidebarSlice.reducer;
