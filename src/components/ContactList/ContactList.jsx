// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css'

// export class ContactList extends Component {
//   static propTypes = {
//     contact: PropTypes.arrayOf(PropTypes.object).isRequired,
//   };

//   render() {
//     console.log(this.props);
//     const { contact, onDelete } = this.props;
//     return (
//       <>
//         {contact.length === 0 ? (
//           <p>No contact</p>
//         ) : (
//           <>
//             <ul className={s.contact__list}>
//               {contact.map(({id, name, number}) => (
//                 <li key={id} className={s.contact__item}>
//                   <p>{name}: {number}</p>
//                   <button type="button" onClick={() => onDelete(id)} className={s.contact__button}>
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </>
//         )}
//       </>
//     );
//   }
// }


function ContactList (props)  {
    
    const { contacts, onDelete } = props;
    return (
      <>
        {contacts.length === 0 ? (
          <p>No contact</p>
        ) : (
          <>
            <ul className={s.contact__list}>
              {contacts.map(({id, name, number}) => (
                <li key={id} className={s.contact__item}>
                  <p>{name}: {number}</p>
                  <button type="button" onClick={() => onDelete(id)} className={s.contact__button}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  
}
ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};




export default ContactList;
