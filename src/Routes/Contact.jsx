import React, { useContext, useState } from "react";
import { GlobalContext } from "../context";
import Form from "../Components/Form";

const Contacto = () => {
  const { theme } = useContext(GlobalContext);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`second-class ${theme}`}>
      <div className={`contact`}><h1>Contact Page</h1></div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Contacto;
