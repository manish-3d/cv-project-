import "../styles/gInfostyle.css"
function Experience() { 
  return (
    <div id="genInfo" className="exp">
        <h1>Experience Details</h1>

        <label htmlFor="company">Company Name :</label>
        <input type="text" id="company" placeholder="Enter company name..." required />

        <label htmlFor="position">Position :</label>
        <input type="text" id="position" placeholder="Enter your position..." required />

        <label htmlFor="responsibilities">Responsibilities :</label>
        <input type="text" id="responsibilities" placeholder="Describe your responsibilities..." />

        <label htmlFor="years">Years Worked :</label>
        <input type="number" id="years" placeholder="Enter number of years..." />
    </div>
  );

}

export default Experience