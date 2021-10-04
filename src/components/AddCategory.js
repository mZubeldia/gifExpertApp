import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    //modifico el estado de categories con el callback y le anado el nuevo valor del input. Ojo, las props solo reciben la funcion del setState, no el array.

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    } else if (inputValue.trim().length < 2) {
      setInputValue("Prueba algo mas largo");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="#">
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
    </>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
