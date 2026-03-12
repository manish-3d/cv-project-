import "../styles/gInfostyle.css";
import React, { useState } from "react";

function Experience({editing}) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [year, setYear] = useState("");

  return (
    <div id="genInfo" className="exp">
      <h1>Experience Details</h1>

      {editing ? (
        <>
          <label htmlFor="company">Company Name :</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name..."
            required
          />

          <label htmlFor="position">Position :</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter your position..."
            required
          />

          <label htmlFor="responsibilities">Responsibilities :</label>
          <input
            type="text"
            id="responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="Describe your responsibilities..."
          />

          <label htmlFor="years">Years Worked :</label>
          <input
            type="number"
            id="years"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter number of years..."
          />
        </>
      ) : (
        <div id="displayflex">
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Position:</strong> {position}</p>
          <p><strong>Responsibilities:</strong> {responsibilities}</p>
          <p><strong>Years Worked:</strong> {year}</p>
        </div>
      )}
    </div>
  );
}

export default Experience;