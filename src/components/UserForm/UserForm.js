import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import data from "../../assets/data.json";
import useAlert from "../../hooks/useAlert";
import { addUser } from "../../redux/user/action";
import FormFields from "../FormFields";
import {colors} from "../../theme/colors"
import "./userForm.css";
import { validateEmail } from "../../utils/validateEmail";

const Form = () => {
  const Alert = useAlert();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [formData, setFormData] = React.useState({});
  const onChange = (name, e) => {
    let { value } = e.target;
    if (name === "profile_pic") {
      var file = e.target.files[0];
      value = file;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    data.map((x) => {
      if (x.required && !formData[x.key]) {
        isValid = false;
        Alert(`${x.key} is required.`, "error");
      }
      if(x.key==='email' && !!formData["email"] && !validateEmail(formData["email"])){
        isValid = false;
        Alert(`Please enter valid email`, "error");
      }
    });
    if (isValid) {
      dispatch(addUser(formData));
      window.localStorage.setItem("userData", JSON.stringify(formData));
      Alert("Congratulation..!", "success");
      navigate(`/home`);
    }
  };

  return (
    <form className="formContainer" >
      {formData.profile_pic && (
        <div className="imgContainer">
          <img
            style={{ width: "20%" }}
            alt="DP"
            src={URL.createObjectURL(formData.profile_pic)}
          />
        </div>
      )}
      {data.map((field, i) => (
        <FormFields key={i} field={field} onChange={onChange} />
      ))}
      <div>
        <button style={{background:colors.primary}} className="btn" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
