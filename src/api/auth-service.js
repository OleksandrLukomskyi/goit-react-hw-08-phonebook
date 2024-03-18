import axios from 'axios';
import { clearAuthHeader, setAuthHeader } from './api';

export const signUpApi = async body => {
  const { data } = await axios.post('/users/signup', body);
  setAuthHeader(data.token);
  return data;
};

export const logInApi = async body => {
  const { data } = await axios.post('/users/login', body);
  console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  localStorage.clear();
  return data;
};

export const getProfile = async () => {
  const { data } = await axios.get('/users/current');

  return data;
};
