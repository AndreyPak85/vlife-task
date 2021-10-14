import { Switch, Route } from 'react-router-dom';
import { AboutPage } from '../pages/About';

import { MainPage } from '../pages/MainPage';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/about' exact component={AboutPage} />
      </Switch>
    </>
  );
};
