import jwt from 'jsonwebtoken';

export const decodeToken = token => {
  return jwt.decode(token);
};

export function setToken(token) {
  localStorage.setItem('token', token);
}

export function getToken() {
  const token = localStorage.getItem('token');
  return token;
}

export const destroyToken = () => {
  return localStorage.removeItem('token');
};
