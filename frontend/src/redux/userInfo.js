import { createSlice } from "@reduxjs/toolkit";
// Create Slice helps with making reducers change states

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: {
      firstName: "",
      lastName: "",
      email: "",
      survey: "",
      phone: "",
      profession: "",
      filename: "",
      isLoggedIn: null,
      isActive: true,
      isAdmin: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {
        firstName: "",
        lastName: "",
        email: "",
        survey: "",
        phone: "",
        profession: "",
        filename: "",
        isLoggedIn: false,
        isActive: false,
        isAdmin: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
