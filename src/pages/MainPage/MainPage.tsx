import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//thunks
import { asyncGetUsersThunk } from '../../store/Users/UsersThunk';
//components
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetUsersThunk());
  }, []);

  return (
    <>
      <Header />
      <div className='main-page'>
        <div className='container'></div>
      </div>
    </>
  );
};
