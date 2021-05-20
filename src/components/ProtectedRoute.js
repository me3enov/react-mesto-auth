import { Route, Redirect } from 'react-router-dom';
import { routeLinks } from '../utils/constants';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { signInLink } = routeLinks;
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to={signInLink} />
      }
    </Route>
  );
};

export default ProtectedRoute;