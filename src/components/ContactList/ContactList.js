import propTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactListStyled';

const ContactList = ({ filterContactsHandler, deleteContactHandler }) => {
  return (
    <List>
      {filterContactsHandler.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          deleteContactHandler={deleteContactHandler}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterContactsHandler: propTypes.array.isRequired,
  deleteContactHandler: propTypes.func.isRequired,
};

export default ContactList;