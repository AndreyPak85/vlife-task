import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Page404 = () => {
  return (
    <>
      <Header />
      <div className='page-404'>
        <div className='container'>
          <h1>Page not found 404</h1>
          <Link className='page-404__link' to='/'>
            Main page
          </Link>
        </div>
      </div>
    </>
  );
};
