import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import { Modal } from '@mui/material';

//thunks
import { asyncGetUsersThunk } from '../../store/Users/UsersThunk';
//components
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { Table } from '../../components/Table';
//ts
import { IUsersSlice } from '../../ts/users';

export const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.users.isLoading
  );

  const [users, setUsers] = useState<Array<IUsersSlice>>([
    {
      checked: true,
      id: 1,
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org',
    },
    {
      checked: false,
      id: 2,
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      website: 'anastasia.net',
    },
    {
      checked: false,
      id: 3,
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      website: 'ramiro.info',
    },
    {
      checked: false,
      id: 4,
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      website: 'kale.biz',
    },
    {
      checked: false,
      id: 5,
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      website: 'demarco.info',
    },
    {
      checked: false,
      id: 6,
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      website: 'ola.org',
    },
    {
      checked: false,
      id: 7,
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      website: 'elvis.io',
    },
    {
      checked: false,
      id: 8,
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      website: 'jacynthe.com',
    },
    {
      checked: false,
      id: 9,
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      website: 'conrad.com',
    },
    {
      checked: false,
      id: 10,
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      website: 'ambrose.net',
    },
  ]);

  const columns = useMemo(
    () => [
      {
        Header: 'Checkbox',
        id: 'checkbox',
        accessor: (str: any) => 'checkbox',
        Cell: (row: any) => {
          return (
            <input
              type='checkbox'
              checked={row.row.original.checked}
              onChange={() => {
                let total = row.data.filter((item: any) => item.checked);
                if (total.length > 1 || !row.data[row.row.id].checked) {
                  const item = row.data[row.row.id];
                  const newItem = { ...item, checked: !item.checked };
                  setUsers([
                    ...row.data.slice(0, row.row.id),
                    newItem,
                    ...row.data.slice(+row.row.id + 1),
                  ]);
                }
              }}
            />
          );
        },
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'More information',
        accessor: 'more',
        Cell: (row: any) => (
          <span
            onClick={() => {
              window.open(
                `https://jsonplaceholder.typicode.com/users/${+row.row.id + 1}`,
                '_blank'
              );
            }}
          >
            more
          </span>
        ),
      },
      { Header: 'Username', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Website', accessor: 'website' },
      {
        Header: 'Delete',
        id: 'delete',
        accessor: (str: any) => 'delete',
        Cell: (row: any) => {
          return (
            <button
              onClick={() => {
                const data = [...users];
                data.splice(row.row.id, 1);
                setUsers(data);
              }}
            >
              delete
            </button>
          );
        },
      },
    ],
    [users]
  );

  useEffect(() => {
    dispatch(asyncGetUsersThunk());
  }, []);

  return (
    <>
      <Modal open={isLoading}>
        <Loader />
      </Modal>

      <Header />
      <div className='main-page'>
        <div className='container'>
          <Table data={users} columns={columns} />
        </div>
      </div>
    </>
  );
};
