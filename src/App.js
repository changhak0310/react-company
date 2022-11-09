import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/User";
import Schedule from "./pages/Schedule";
import Todo from "./pages/Todo";
import { ThemeProvider, createTheme } from '@mui/material/styles';

//Module
import HeaderModule from "./modules/header/HeaderModule";
import Sidebar from './modules/sidebar/SidebarModule';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#3f50b5'
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HeaderModule/>
        <Sidebar/>
        <Routes>
          <Route element={<User/>} path="/user"/>
          <Route element={<Schedule/>} path="/schedule"/>
          <Route element={<Todo/>} path="/todo"/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
