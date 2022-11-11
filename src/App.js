import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/User";
import Schedule from "./pages/Schedule";
import Todo from "./pages/Todo";
import { ThemeProvider, createTheme } from '@mui/material/styles';

//Module
import HeaderModule from "./modules/header/HeaderModule";
import Sidebar from './modules/sidebar/SidebarModule';

//recoil
import { useRecoilState } from 'recoil'
import { darkModeAtom } from './recoil/Atom'

const getDesignToken = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'light' ? 
      {
        //light
        main: "#3949ab",
        dark: "#273377",
        light: "#606dbb"
      }
      :
      {
        //dark
        main: "#1a237e",
        dark: "#121858",
        light: "#474f97"
      }),
    }
  }
})

function App() {
  const [mode, setMode] = useRecoilState(darkModeAtom);
  // const [mode, setMode] = React.useState('light');
  
  const theme = React.useMemo(
    () =>
    createTheme(getDesignToken(mode)),
    [mode],
  );

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
