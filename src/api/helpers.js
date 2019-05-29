import jwt from 'jsonwebtoken';

export const decodeToken = token => {
  return jwt.decode(token);
};

export const setToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
  return getToken();
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return JSON.parse(token);
};

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};

export const encodeUserObject = (user, expiresIn = '30days') => {
  const encodedUser = jwt.sign(user, 'SALT', { expiresIn });
  return localStorage.setItem('encodedUser', encodedUser);
};

export const getEncodedUser = () => {
  const encodedUser = localStorage.getItem('encodedUser');
  return decodeToken(encodedUser);
};

export const destroyEncodedUser = () => {
  localStorage.removeItem('encodedUser');
  return null;
};
