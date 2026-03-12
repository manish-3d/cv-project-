import React from "react";

function GeneralInfo({ editing, cvData, setCvData }) {

  if (!editing) return null;

  return (
    <div id="genInfo">
      <h2>General Information</h2>

      <input
        type="text"
        placeholder="Name"
        value={cvData.name}
        onChange={(e) =>
          setCvData({ ...cvData, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={cvData.email}
        onChange={(e) =>
          setCvData({ ...cvData, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={cvData.phone}
        onChange={(e) =>
          setCvData({ ...cvData, phone: e.target.value })
        }
      />
    </div>
  );
}

export default GeneralInfo;