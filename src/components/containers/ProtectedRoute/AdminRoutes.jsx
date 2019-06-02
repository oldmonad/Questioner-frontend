import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import { getToken, isAdmin } from '../../../api/helpers';

const AdminRoute = ({ component: Component, history, location, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() && isAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

export default withRouter(AdminRoute);

AdminRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};
