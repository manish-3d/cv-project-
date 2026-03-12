import "../styles/gInfostyle.css";
import React  from "react";


function Experience({ editing, cvData, setCvData }) {

  if (!editing) return null;

  return (
    <div id="genInfo">
      <h2>Experience</h2>

      <input
        type="text"
        placeholder="Company"
        value={cvData.company}
        onChange={(e) =>
          setCvData({ ...cvData, company: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Position"
        value={cvData.position}
        onChange={(e) =>
          setCvData({ ...cvData, position: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Responsibilities"
        value={cvData.responsibilities}
        onChange={(e) =>
          setCvData({ ...cvData, responsibilities: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Years Worked"
        value={cvData.year}
        onChange={(e) =>
          setCvData({ ...cvData, year: e.target.value })
        }
      />
    </div>
  );
}

export default Experience;