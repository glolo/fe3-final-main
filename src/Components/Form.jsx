//import React from "react";
import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>User:</label>
        <input type="text" value={user} onChange={handleUserChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
