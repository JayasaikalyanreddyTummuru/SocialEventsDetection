import './App.css';
import Login from './login/login';
import Register from './login/register';
import Event from './events/events';



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
<Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          {/* <Route exact path="/login" element={<Login/>}/> */}
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/event" element={<Event/>}/>

        </Routes>
    </Router>
  );
}

export default App;
