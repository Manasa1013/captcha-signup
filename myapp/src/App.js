import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="*" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
