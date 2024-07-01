import css from "./contact.module.css";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ data: { id, name, number } }) => {

  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <p className={css.data}>
        <IoAccessibilityOutline className={css.iconContact} size="20" />
        {name}
      </p>
      <p className={css.data}>
        <IoCallOutline className={css.iconContact} size="20" />
        {number}
      </p>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
