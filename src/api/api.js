// import axios from 'axios';
// export const api = axios.create({
//   baseURL: 'https://65d4612f3f1ab8c63434fb66.mockapi.io/',
// });
import axios from 'axios';
// export const api = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });
// export const api = () => {
//   axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// };

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
