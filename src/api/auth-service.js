// import axios from 'axios';
// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

import { api } from './api';

export const signUpApi = async body => {
  const { data } = await api.post('/users/signup', body);
  return data;
};

export const logInApi = async body => {
  const { data } = await api.post('/users/login', body);
  return data;
};

export const logOut = async token => {
  const { data } = await api.post('/users/logout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getProfile = async token => {
  const { data } = await api('/users/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
