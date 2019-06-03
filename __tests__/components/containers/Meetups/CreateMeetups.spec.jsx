import React from 'react';
import { shallow } from 'enzyme';

import { CreateMeetup } from '../../../../src/components/containers/Meetups/CreateMeetup';

const props = {
  auth: {
    isLoading: true,
    successResponse: {
      status: 'success',
      message: '',
    },
    errorResponse: [],
  },
  loginUser: jest.fn(),
};

const component = shallow(<CreateMeetup {...props} />);

describe('Login component', () => {
  it('renders without errors', () => {
    expect(component).toMatchSnapshot();
  });
});
