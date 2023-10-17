import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
