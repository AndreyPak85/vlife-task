import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Modal } from '@mui/material';
//thunks
import { asyncGetUsersThunk } from '../../store/Users/UsersThunk';
//components
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

export const MainPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: RootStateOrAny) => state.users.isLoading
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
        <div className='container'></div>
      </div>
    </>
  );
};
