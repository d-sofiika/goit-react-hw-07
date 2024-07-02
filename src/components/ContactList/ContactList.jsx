import {  useDispatch, useSelector } from "react-redux";
import {   selectFilteredContacts } from "../../redux/contactSlice";
import Contact from "../Contact/Contact";
import css from "./contactList.module.css";
import { fetchContact } from "../../redux/contactsOps";
import { useEffect } from "react";


const ContactList = () => {
  
  const dispatch = useDispatch()
  const filteredContacts = useSelector(selectFilteredContacts)
  
    useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);


    if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }

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
