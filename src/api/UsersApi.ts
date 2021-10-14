import { instance } from './instance';

export const usersApi = {
  getUsers() {
    try {
      return instance.get('/users');
    } catch (error) {
      throw error;
    }
  },
};
