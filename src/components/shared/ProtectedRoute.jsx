import ToolsKit from '../../ToolsKit';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route exact {...rest} render={(props) => (
        ToolsKit.isUserAuthorized()
        ? <Component {...props} />
        : <Redirect to='/sign-in' />
    )} />
  );

  export default ProtectedRoute;