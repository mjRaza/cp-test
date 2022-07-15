import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import Loader from "../../controls/Loader";

const Form = () => {
  let navigate = useNavigate();
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    const data = window.localStorage.getItem("userData");
    if (data) {
      navigate(`/home`);
    } else {
      setloading(false);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <UserForm />
    </div>
  );
};

export default Form;
