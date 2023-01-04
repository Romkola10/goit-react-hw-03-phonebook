import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className='list_container' >
            <ul className='list'>
                {contacts.map(({ id, name, number }) => (
                    <li className='item' key={id} >
                        <p className='contact_name'>{name}: {number}</p>
                        

                        <button className='button'  type='submit' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}


ContactList.protoType = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            number: PropTypes.number,
        })
    ),

    onDeleteContact: PropTypes.func,
};

export default ContactList;