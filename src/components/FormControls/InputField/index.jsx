import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { touchedFields, errors },
  } = form;
  const hasError = touchedFields[name] && errors[name];
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          error={!!hasError}
          helperText={errors[name]?.message}
          fullWidth
          label={label}
          disabled={disabled}
          margin={"normal"}
          variant="outlined"
        />
      )}
      name={name}
      control={form.control}
    />
  );
}

export default InputField;
