
import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { GiRotaryPhone } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {  selectError, selectIsLoading } from "./redux/contactSlice";
import { useEffect } from "react";
import { fetchContact } from "./redux/contactsOps";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContact());
  },[dispatch])

  return (
    <>
      <div id="box">
        <p><GiRotaryPhone  size="124" /></p>
        <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox />
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
       
        <ContactList />
      </div>
    </>
  );
}

export default App;
