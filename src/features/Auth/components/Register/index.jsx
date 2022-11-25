import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";

Register.propTypes = {};

function Register(props) {
  const handleSubmitForm = (values) => {
    console.log("Form submit:", values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmitForm} />
    </div>
  );
}

export default Register;
