import "./App.css";
import Navbar from "./components/Navbar"; /* ===== props Link ===== */
import DataForm from "./components/DataForm"; /* ===== props Link ===== */
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*============= PROPS ================*/
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191970";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtails" services="we are help to remove acne" /> */}
      {/* <Navbar />  */}
      <BrowserRouter>
        <Navbar
          title="TextUtails"
          feature="Feature"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
             axact path="/"
              element={
                <DataForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
            <Route axact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
