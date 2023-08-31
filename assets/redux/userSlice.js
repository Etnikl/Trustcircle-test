import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { id } = action.payload;
      state.id = id;
    },
    logout: (state) => {
      state.id = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     id: null,
//     firstName: '',
//     lastName: '',
//     password: '',
//     email: '',
//   },
//   reducers: {
//     loginSuccess: (state, action) => {
//       const { id, firstName, lastName, password, email } = action.payload;
//       state.id = id;
//       state.name = firstName + " "+ lastName;
//       state.email = email;
//       state.password = password;
//     },
//     logout: (state) => {
//       state.id = null;
//       state.name = '';
//       state.email = '';
//       state.password = '';
//     },
//   },
// });

// export const { loginSuccess, logout } = userSlice.actions;
// export default userSlice.reducer;
