import { Switch, Route } from 'react-router-dom';
import { AboutPage } from '../pages/About';
import { MainPage } from '../pages/MainPage';
import { Page404 } from '../pages/Page404/Page404';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='*' component={Page404} />
      </Switch>
    </>
  );
};
