import PropTypes from 'prop-types';
import './ContactList.module.css';


export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className="TodoList">
        {contacts.map(({ id, name, number }) => {
            return (
            <li key={id} className='TodoList__items'>
            <p className="TodoList__text">{name}: {number}</p>
            <button onClick={() => onDeleteContact(id)}>
             delete </button>

            </li>
            );
        })}
    </ul>
);

ContactList.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };