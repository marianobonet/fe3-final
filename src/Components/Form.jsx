
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (name.length <= 5) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("**Por favor verifique su información nuevamente**");
      return;
    }

    setError("");
    setSuccess(`**Gracias _${name}_, te contactaremos cuando antes vía mail**`);
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
