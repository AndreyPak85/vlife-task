import { IUsersSlice } from './../../ts/users';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersApi } from '../../api/UsersApi';

export const asyncGetUsersThunk = createAsyncThunk(
  'users/getUsers',
  async () => {
    try {
      const response = await usersApi.getUsers();
      const resultData: any = response.data;
      return resultData;
    } catch (error) {}
  }
);
