
import { useId, useState } from "react";
/*import * as Yup from "yup";*/

import css from "./contactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  
  const dispatch = useDispatch();

const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
          dispatch(addContact({ name, number }));
       setName('');
    setNumber('');
    }
   const nameFieldId = useId();
    const numberFieldId = useId();
  
    /*const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    
    });*/

  return (

      <form className={css.form} onSubmit={handleSubmit} /*validationSchema={FeedbackSchema}*/ >
        
              <div className={css.formGroup}>
          <label className={css.label} htmlFor={nameFieldId}>Name</label>
          <input className={css.input} id={nameFieldId} type="text" value={name} name="username" onChange={(e) => setName(e.target.value)} />

        </div>

        <div className={css.formGroup}>
          <label className={css.label} htmlFor={numberFieldId}>Number</label>
          <input id={numberFieldId} className={css.input} value={number} type="tel" name="number"  onChange={(e) => setNumber(e.target.value)} />
         
        </div>

        <div className={css.buttonGroup}>
          <button className={css.btn} type="submit">Add contact</button>
        </div>
          </form>

  )
}

export default ContactForm