import { createSlice } from '@reduxjs/toolkit';
import { userSliceState, IUsersSlice } from '../../ts/users';

import { asyncGetUsersThunk } from './UsersThunk';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: true,
    users: userSliceState,
  },
  reducers: {
    // removeUser(state, action) {
    //   state.users.splice(action.payload, 1);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetUsersThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(asyncGetUsersThunk.fulfilled, (state, action) => {
      // action.payload.forEach((element: IUsersSlice) => {
      //   state.users.push({
      //     id: element.id,
      //     username: element.username,
      //     email: element.email,
      //     website: element.website,
      //   });
      // });
      state.isLoading = false;
    });
    builder.addCase(asyncGetUsersThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
// export const { removeUser } = usersSlice.actions;
