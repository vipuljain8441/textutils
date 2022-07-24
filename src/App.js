// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const [Mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode has been enabled", "success");
      document.title = "TextUtils Dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing mode";
      // }, 2000);
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
      document.title = "TextUtils Light mode";
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="About Textutils" hometext="Home"/> */}

      <Router>
        <Navbar
          title="TextUtils"
          mode={Mode}
          toggleMode={toggleMode}
          abouttext="About Textutils"
          hometext="Home"
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
          <Routes>
            <Route exact path="/about" element={<About />}></Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  showalert={showalert}
                  heading="Enter The Text to Analyize :-"
                  mode={Mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
