import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/User";
import Schedule from "./pages/Schedule";
import Todo from "./pages/Todo";
import HeaderModule from "./modules/header/HeaderModule";

function App() {
  return (
    <BrowserRouter>
    <HeaderModule/>
      <Routes>
        <Route element={<User/>} path="/user"/>
        <Route element={<Schedule/>} path="/schedule"/>
        <Route element={<Todo/>} path="/todo"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
