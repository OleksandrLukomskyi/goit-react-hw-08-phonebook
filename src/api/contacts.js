import axios from 'axios';
import { setAuthHeader } from './api';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = localStorage.getItem('token');
// if (token) {
//   setAuthHeader(token);
// }

export const fetchContactsApi = async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log('response from fetchContactsApi', data);

    return data;
  } catch (error) {
    console.error('Error in fetchContactsApi:', error);
    throw error;
  }
};

export const addContactApi = async newContact => {
  try {
    console.log(newContact);
    const { data } = await axios.post(`/contacts`, newContact);
    console.log('Response from addContactApi', data);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    console.error('Error in addContactApi:', error);
    throw error;
  }
};

export const deleteContactApi = async contactId => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    console.log('Response from deleteContactApi', data);
    return data;
  } catch (error) {
    console.error('Error in deleteContactApi', error);
    throw error;
  }
};
