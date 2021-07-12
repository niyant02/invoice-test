import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import AppRoute from './AppRoute';
import Invoices from '../components/Invoices';

const Routes = () => {
    return (
        <Switch>
            <AppRoute exact path="/" component={Invoices} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
