import { Route, Switch } from 'react-router-dom';
import CheckOutMobile from './component/CheckOutMobile';
import MobileCheckouTrue from './component/MobileCheckouTrue';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/checkoutmobile/:token" component={CheckOutMobile} />
      <Route exact path="/mobilecheckouttrue" component={MobileCheckouTrue} />
    </Switch>
  );
}

export default AppRouter;
