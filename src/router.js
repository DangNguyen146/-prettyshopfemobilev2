import { Route, Switch } from 'react-router-dom';
import CheckOutMobile from './component/CheckOutMobile';
import MobileCheckouTrue from './component/MobileCheckouTrue';
import MobileCheckouFalse from './component/MobileCheckouFalse.js';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/checkoutmobile/:sessionId" component={CheckOutMobile} />
      <Route exact path="payment/success" component={MobileCheckouTrue} />
      <Route exact path="payment/failed" component={MobileCheckouFalse} />
    </Switch>
  );
}

export default AppRouter;
