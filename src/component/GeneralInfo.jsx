import "../styles/gInfostyle.css";
import React, { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");       
  const [email, setEmail] = useState("");     
  const [phone, setPhone] = useState("");     
  const [editing, setEditing] = useState(true); 

  return (
    <div id="genInfo">
      <h1>General-Information</h1>

      {editing ? (
        // FORM MODE
        <>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name..."
            required
          />

          <label htmlFor="email">Email id :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johnsnow@gmail.com"
            required
          />

          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="xxxxxxxx"
          />

          <button onClick={() => setEditing(false)}>Save</button>
        </>
      ) : (
        // DISPLAY MODE
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>

          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;