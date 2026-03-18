import React  from "react";
import "../styles/gInfostyle.css";

function Education({ editing, cvData, setCvData }) {

  if (!editing) return null;

  return (
    <div id="genInfo">
      <h2>Education</h2>

      <input
        type="text"
        placeholder="School Name"
        value={cvData.school}
        onChange={(e) =>
          setCvData({ ...cvData, school: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Title of Study"
        value={cvData.studyTitle}
        onChange={(e) =>
          setCvData({ ...cvData, studyTitle: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Date of Study"
        value={cvData.studyDate}
        onChange={(e) =>
          setCvData({ ...cvData, studyDate: e.target.value })
        }
      />
    </div>
  );
}
Education.propTypes = {
  name : PropTypes.string,
};
export default Education;