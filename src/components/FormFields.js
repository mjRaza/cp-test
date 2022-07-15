import React from "react";
import Input from "../controls/Input";
import Radio from "../controls/Radio";

const FormFields = ({
  field: { key, id, type, label, required, options, placeholder },
  onChange,
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          placeholder={placeholder}
          keys={key}
          id={id}
          type="text"
          label={label}
          onChange={onChange}
          required={required}
        />
      );
    case "image":
      return (
        <Input
          keys={key}
          id={id}
          type="file"
          label={label}
          onChange={onChange}
          required={required}
        />
      );
    case "date":
      return (
        <Input
          placeholder={placeholder}
          keys={key}
          id={id}
          type="date"
          label={label}
          onChange={onChange}
          required={required}
        />
      );
    case "radio":
      return (
        <Radio
          options={options}
          keys={key}
          id={id}
          label={label}
          required={required}
          onChange={onChange}
        />
      );

    default:
      return null;
  }
};

export default FormFields;
