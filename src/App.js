
import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import LienHe from "./components/LienHe";
import Login from "./components/Login";
import PrivateRouter from './components/PrivateRouter'
function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route  path="/dashboard" element={<DashBoard/>}></Route>
            <Route path="/lienhe" element={<PrivateRouter><LienHe/></PrivateRouter>}/>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
