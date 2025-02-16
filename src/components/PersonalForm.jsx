// import React from "react";
import { useState } from "react";

export default function PersonalForm({ personal, setPersonal }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonal((prevPersonal) => ({ ...prevPersonal, [name]: value }));
  }

  return (
    <div>
      <div className="personal-field">
        <div className="name">
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={personal.name}
          />
        </div>
        <div className="email">
          <label htmlFor="">Email: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={personal.email}
          />
        </div>
        <div className="number">
          <label htmlFor="">Phone Number: </label>
          <input
            type="tel"
            name="number"
            onChange={(e) => handleChange(e)}
            value={personal.number}
          />
        </div>
      </div>
    </div>
  );
}

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");

// function nameHandler(e) {
//   setName(e.target.value);
// }

// function emailHandler(e) {
//   setEmail(e.target.value);
// }

// function phoneHandler(e) {
//   setPhone(e.target.value);
// }
