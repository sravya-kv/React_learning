import { useState } from "react";
import "./Form.css";

function Form() {
  const [basicForm, setBasicForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(basicForm);

  function handleChange(e) {
    setBasicForm({ ...basicForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();
    console.log("Form submitted");
  }

  function validateForm() {
    if (basicForm.firstName && basicForm.firstName.length > 3) {
      console.log("FirstName passed");
    } else {
      console.log("Invalid firstname");
    }
    console.log("False");
  }

  return (
    <div>
      <h1>Basic Form</h1>
      <div className="center">
        <form action="" onSubmit={handleSubmit} className="formContainer">
          <label htmlFor="firstName" className="label">
            {" "}
            First Name{" "}
          </label>
          <input
            type="text"
            className="input"
            name="firstName"
            value={basicForm.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName" className="label">
            {" "}
            Last Name{" "}
          </label>
          <input
            type="text"
            className="input"
            name="lastName"
            value={basicForm.lastName}
            onChange={handleChange}
          />

          <label htmlFor="email" className="label">
            {" "}
            Email{" "}
          </label>
          <input
            type="text"
            className="input"
            name="email"
            value={basicForm.email}
            onChange={handleChange}
          />

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
