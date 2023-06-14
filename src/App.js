import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
    
const Location = (props) => {

  return (
    <div>
        <h1 style={{color: "red"}}>Location Component Loaded!</h1>
    </div>
  );
}
    

    
function App() {
  return (
    <div>
      <h1>Location</h1>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        |
        <Link to="/location/chicago">Chicago</Link>
        |
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />} />
      </Routes>
    </div>
  );
}
    
export default App
