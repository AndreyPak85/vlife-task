export interface IUsersSlice {
  checked: boolean | null;
  id: number | null;
  username: string | null;
  email: string | null;
  website: string | null;
}

export const userSliceState: IUsersSlice[] = [];
