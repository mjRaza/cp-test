import React from "react";
import { InputLabel, Input } from "@mui/material";

const InputField = ({ keys, id, type="text", label, required, value, onChange ,placeholder}) => {
  return (
    <div style={{marginTop:'10px',width:"100%"}}>
      <InputLabel htmlFor={id?.toString()}>{label}</InputLabel>
      <Input
        style={{width:'100%'}}
        type={type}
        id={id?.toString()}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(keys, e)}
      />
    </div>
  );
};

export default InputField;
