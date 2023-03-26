import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./Components/Signup/Signup";
import { Home } from "./Pages/Home";
import { Toast } from "./Components/Toast/Toast";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Signup />}></Route>
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
