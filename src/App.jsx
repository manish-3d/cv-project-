import React, { useState } from "react";
import GeneralInfo from "./component/GeneralInfo";
import Education from "./component/Education";
import Experience from "./component/Experience";
import "./styles/submitbtn.css";

function App() {
  const [editing, setEditing] = useState(true);

  return (
    <div id="background">
      <h1 style={{ textAlign: "center" , marginTop: "clamp(1rem, 4vw, 3rem)" }}>
        CV Application
      </h1>

      <GeneralInfo editing={editing} />
      <Education editing={editing} />
      <Experience editing={editing} />

      <div className="buttons">
        {editing ? (
          <button onClick={() => setEditing(false)}>Save CV</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit CV</button>
        )}
      </div>
    </div>
  );
}

export default App;