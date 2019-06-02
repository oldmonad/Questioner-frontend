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
export const getItem = name => {
  const item = localStorage.getItem(name);
  return item;
};

export const destroyToken = () => {
  return localStorage.removeItem('token');
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};

export const setItem = (name, value) => {
  localStorage.setItem(name, value);
};
