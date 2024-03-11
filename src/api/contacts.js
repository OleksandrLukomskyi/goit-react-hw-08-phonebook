import { api } from './api';

export const fetchContactsApi = async token => {
  const { data } = await api(`/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const addContactApi = async (newContact, token) => {
  try {
    const { data } = await api.post(
      `/contacts`,
      (newContact,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteContactApi = async (contactId, token) => {
  const { data } = await api.delete(`/contacts/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
