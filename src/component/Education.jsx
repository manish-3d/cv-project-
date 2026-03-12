import "../styles/gInfostyle.css" ;
function Education() {
  return (
    <div id="genInfo">
        <h1>Education Details</h1>

        <label htmlFor="school">School / University :</label>
        <input type="text" id="school" placeholder="Enter your school or university..." required />

        <label htmlFor="degree">Degree :</label>
        <input type="text" id="degree" placeholder="Enter your degree..." required />

        <label htmlFor="field">Field of Study :</label>
        <input type="text" id="field" placeholder="Enter your field of study..." />

        <label htmlFor="gradYear">Graduation Year :</label>
        <input type="number" id="gradYear" placeholder="2025" />
    </div>
  );
}

export default Education