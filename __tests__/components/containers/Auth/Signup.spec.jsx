import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Signup } from '../../../../src/components/containers/Auth/Signup';

const props = {
  auth: {
    isLoading: true,
    successResponse: {
      status: 'success',
      message: '',
    },
    errorResponse: [],
  },
  signupUser: jest.fn(),
};

const component = shallow(<Signup {...props} />);
const wrapper = mount(
  <BrowserRouter>
    <Signup {...props} />
  </BrowserRouter>,
);

describe('Signup component', () => {
  it('renders without errors', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render a form with 2 input fields', () => {
    const inputs = wrapper.find('input').getElements();
    expect(inputs.length).toBe(5);
  });

  it('should correctly initialize the value of the email field to an empty string', () => {
    const input = wrapper.find('input[name="email"]');
    expect(input.prop('value')).toBe('');
  });

  it('should correctly initializes the value of the password field to an empty string', () => {
    const input = wrapper.find('input[name="password"]');
    expect(input.prop('value')).toBe('');
  });

  it('should correctly initialize the value of the email field to an empty string', () => {
    const input = wrapper.find('input[name="firstname"]');
    expect(input.prop('value')).toBe('');
  });

  it('should correctly initializes the value of the password field to an empty string', () => {
    const input = wrapper.find('input[name="username"]');
    expect(input.prop('value')).toBe('');
  });
  it('should correctly initialize the value of the email field to an empty string', () => {
    const input = wrapper.find('input[name="confirmPassword"]');
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
    const firstname = wrapper.find('input[name="firstname"]');
    firstname.instance().value = 'igbominadeveloper@ah.com';
    firstname.simulate('change');
    const username = wrapper.find('input[name="username"]');
    username.instance().value = 'igbominadeveloper@ah.com';
    username.simulate('change');
    const password = wrapper.find('input[name="password"]');
    password.instance().value = 'password1';
    password.simulate('change');
    const confirmPassword = wrapper.find('input[name="confirmPassword"]');
    confirmPassword.instance().value = 'password1';
    confirmPassword.simulate('change');
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
  });
});
