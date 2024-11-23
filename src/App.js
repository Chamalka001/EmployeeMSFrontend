import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar.js";
import Nav from "./layout/Nav.js";
import Home from './pages/Home.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser.js';
import EditUser from './users/EditUser.js';
import ViewUser from './users/ViewUser.js';


function App() {
  return (
    <div className="App">
      <Router>
         <Nav/>

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:empID" element={<EditUser />} />
          <Route path="/viewuser/:empID" element={<ViewUser />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
