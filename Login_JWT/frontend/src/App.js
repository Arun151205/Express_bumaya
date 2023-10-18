import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import MainPage from "./components/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<MainPage/>}></Route> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
