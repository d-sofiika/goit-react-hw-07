import {  useSelector } from "react-redux";
import {  selectContacts } from "../../redux/contactSlice";
import Contact from "../Contact/Contact";
import css from "./contactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  

  const filterContact = useSelector(selectNameFilter);
 
  const contacts = useSelector(selectContacts);
 
  const filteredContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(filterContact.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((person) => (
        <li className={css.item} key={person.id}>
          <Contact data={person} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
