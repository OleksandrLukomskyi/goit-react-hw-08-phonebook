//
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

// export const logOut = async token => {
//   const { data } = await api.post('/users/logout', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return data;
// };
export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

// export const getProfile = async token => {
//   const { data } = await api('/users/current', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return data;
// };

export const getProfile = async () => {
  const { data } = await axios('/users/current');

  return data;
};
