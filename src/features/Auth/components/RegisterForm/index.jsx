import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/FormControls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup
    .object({
      title: yup.string().required("Please enter title"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="fullname" label="Full Name" form={form} />
      <InputField name="email" label="Email" form={form} />
      <InputField name="password" label="Password" form={form} />
      <InputField name="retypepassword" label="Retype Password" form={form} />
    </form>
  );
}

export default RegisterForm;
