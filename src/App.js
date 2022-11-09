import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/User";
import Schedule from "./pages/Schedule";
import Todo from "./pages/Todo";
import HeaderModule from "./modules/header/HeaderModule";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    main: '#3f50b5'
  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HeaderModule/>
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
