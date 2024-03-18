import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';

import { addContactPostThunk } from 'store/contacts/thunksContacts';
import { selectorContacts } from 'store/contacts/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectorContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = items.some(
      item => item.name === name.trim() || item.number === number.trim()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContactPostThunk(newContact));

    setNumber('');
    setName('');

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formBloc}>
      <label className={css.inputBloc}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.inputBloc}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="459-12-56"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
