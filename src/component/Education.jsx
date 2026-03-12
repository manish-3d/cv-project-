import React, { useState } from "react";
import "../styles/gInfostyle.css";

function Education({ editing }) {
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");

  return (
    <div id="genInfo">
      <h1>Education Details</h1>

      {editing ? (
        <>
          <label htmlFor="school">School Name :</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter school name..."
            required
          />

          <label htmlFor="title">Title of Study :</label>
          <input
            type="text"
            id="title"
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
            placeholder="Enter title of study..."
            required
          />

          <label htmlFor="date">Date of Study :</label>
          <input
            type="text"
            id="date"
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
            placeholder="Enter study year..."
          />
        </>
      ) : (
        <div>
          <p><strong>School:</strong> {school}</p>
          <p><strong>Title of Study:</strong> {studyTitle}</p>
          <p><strong>Date:</strong> {studyDate}</p>
        </div>
      )}
    </div>
  );
}

export default Education; 