import propTypes from 'prop-types';
import { Item, DelButton } from './ContactItemStyled';

const ContactItem = ({ id, name, number, deleteContactHandler }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => deleteContactHandler(id)}>
        Delete
      </DelButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  deleteContactHandler: propTypes.func.isRequired,
};

export default ContactItem;