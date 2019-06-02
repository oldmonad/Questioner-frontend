import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Login } from '../../../../src/components/containers/Auth/Login';

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

const component = shallow(<Login {...props} />);
const wrapper = mount(
  <BrowserRouter>
    <Login {...props} />
  </BrowserRouter>,
);

describe('Login component', () => {
  it('renders without errors', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render a form with 2 input fields', () => {
    const inputs = wrapper.find('input').getElements();
    expect(inputs.length).toBe(2);
  });

  it('should correctly initialize the value of the email field to an empty string', () => {
    const input = wrapper.find('input[name="email"]');
    expect(input.prop('value')).toBe('');
  });

  it('should correctly initializes the value of the password field to an empty string', () => {
    const input = wrapper.find('input[name="password"]');
    expect(input.prop('value')).toBe('');
  });

  it('should not submit the form if there is an empty field', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.instance().state).toBe(null);
  });

  it('should submit the form and have an empty error body', () => {
    const email = wrapper.find('input[name="email"]');
    email.instance().value = 'igbominadeveloper@ah.com';
    email.simulate('change');
    const password = wrapper.find('input[name="password"]');
    password.instance().value = 'password1';
    password.simulate('change');
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
  });
});
