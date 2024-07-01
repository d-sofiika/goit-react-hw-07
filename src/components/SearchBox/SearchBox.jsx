import { useState } from "react";
import css from "./searchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterContact = useSelector(selectNameFilter)  
 const [name, setName] = useState(filterContact);
  const dispatch = useDispatch();

const handleFilter = (event) => {
    const { value } = event.target;
    setName(value);
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input className={css.input} type='text' value={name} onChange={handleFilter} />
       </form>
      </div>
  );
};

export default SearchBox;
