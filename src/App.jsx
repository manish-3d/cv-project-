import React, { useState } from "react";
import GeneralInfo from "./component/GeneralInfo";
import Education from "./component/Education";
import Experience from "./component/Experience";
import "./styles/layout.css";
import "./styles/submitbtn.css";

function App() {
  const [editing, setEditing] = useState(true);

  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    studyTitle: "",
    studyDate: "",
    company: "",
    position: "",
    responsibilities: "",
    year: "",
  });

  return (
    <div id="background">
      <h1 className="cv-title">CV Application</h1>

      <div className="container">
        
        {/* LEFT SIDE FORM */}
        <div className="form-section">
          <GeneralInfo editing={editing} cvData={cvData} setCvData={setCvData}/>
          <Education editing={editing} cvData={cvData} setCvData={setCvData}/>
          <Experience editing={editing} cvData={cvData} setCvData={setCvData}/>

          <div className="buttons">
            {editing ? (
              <button onClick={() => setEditing(false)}>Save CV</button>
            ) : (
              <button onClick={() => setEditing(true)}>Edit CV</button>
            )}
          </div>
        </div>

        {/* RIGHT SIDE PREVIEW */}
        <div className="preview-section">
          <h2>{cvData.name}</h2>
          <p>{cvData.email}</p>
          <p>{cvData.phone}</p>

          <h3>Education</h3>
          <p>{cvData.school}</p>
          <p>{cvData.studyTitle}</p>
          <p>{cvData.studyDate}</p>

          <h3>Experience</h3>
          <p>{cvData.company}</p>
          <p>{cvData.position}</p>
          <p>{cvData.responsibilities}</p>
          <p>{cvData.year}</p>
        </div>

      </div>
    </div>
  );
}

export default App;