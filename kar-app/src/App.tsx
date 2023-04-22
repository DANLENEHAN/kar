import "./App.css";
import TrainNav from "./navbar/navbar";
import Admin from "./admin/admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <Router>
      <div className="App">
        <TrainNav
          navItems={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Admin",
              link: "/admin",
            },
          ]}
        />
      </div>
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
