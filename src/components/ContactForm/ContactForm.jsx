import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ContactForm() {
  //variables
  const [credentials, setCredentials] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const history = useHistory();

  //methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //template
  return (
    <form>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          placeholder="Surname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="number">Phone Number:</label>
        <input
          type="text"
          id="number"
          placeholder="Number"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          onChange={handleChange}
          value={credentials.description}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
