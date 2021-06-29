import ToolsKit from '../../ToolsKit';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route exact {...rest} render={(props) => (
        ToolsKit.isUserAuthorized()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/sign-in',
            state: { from: props.location }
          }} />
    )} />
  );

  export default ProtectedRoute;