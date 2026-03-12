import GeneralInfo from "./component/GeneralInfo"
import Education from "./component/Education"
import Experience from "./component/Experience"

function App(){

  return <div id="background">
    <h1>CV Application</h1>
    <GeneralInfo/>
    <Education/>
    <Experience/>
       </div>;
  
}

export default App;
