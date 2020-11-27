import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!localStorage.getItem("token")) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/auth", state: { from: props.location } }}
            />
          );
        }

        // logged in so return component
        return <Component {...props} />;
      }}
    />
  );
};

export {
  PrivateRoute
};
