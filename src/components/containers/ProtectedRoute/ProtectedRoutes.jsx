import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import { getToken, decodeToken } from '../../../api/helpers';

const ProtectedRoute = ({
  component: Component,
  history,
  location,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default withRouter(ProtectedRoute);

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};
