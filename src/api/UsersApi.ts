import { instance } from './instance';

export const usersApi = {
  getUsers: () => {
    return instance.get('/users');
  },
};
