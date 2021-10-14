export interface IUsersSlice {
  address: Object | null;
  company: Object | null;
  email: string | null;
  id: number | null;
  name: string | null;
  phone: string | null;
  username: string | null;
  website: string | null;
}

export const userSliceState: IUsersSlice[] = [
  {
    address: null,
    company: null,
    email: null,
    id: null,
    name: null,
    phone: null,
    username: null,
    website: null,
  },
];
