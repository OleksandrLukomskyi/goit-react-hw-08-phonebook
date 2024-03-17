import axios from 'axios';
import { setAuthHeader } from './api';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// export const fetchContactsApi = async token => {
//   const { data } = await api(`/contacts`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return data;
// };
export const fetchContactsApi = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

// export const addContactApi = async (newContact, token) => {
//   try {
//     const { data } = await api.post(
//       `/contacts`,
//       (newContact,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//     );

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const addContactApi = async newContact => {
  try {
    const { data } = await axios.post(`/contacts`, newContact);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    throw error;
  }
};

// export const deleteContactApi = async (contactId, token) => {
//   const { data } = await api.delete(`/contacts/${contactId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return data;
// };
export const deleteContactApi = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);

  return data;
};
