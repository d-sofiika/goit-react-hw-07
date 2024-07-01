
import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { GiRotaryPhone } from "react-icons/gi";


function App() {

  return (
    <>
      <div id="box">
        <p><GiRotaryPhone  size="124" /></p>
        <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox  />
        <ContactList />
      </div>
    </>
  );
}

export default App;
