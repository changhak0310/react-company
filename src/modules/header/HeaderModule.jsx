import * as React from 'react';
//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//components
import Logo from '../../components/header/Logo';
import Profile from '../../components/header/Profile';
import DarkMode from '../../components/header/DarkMode';

export default function HeaderModule() {
    return(
      <AppBar position="static" sx={{
        boxShadow: 'none', 
        height: '64px',
        backgroundColor: 'primary.main'
      }}>
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}
            //</Toolbar>sx={{style}}
            > 
              <Box
                sx={{
                  justifyContent: 'start',
                }}
              >
                <Logo/>
              </Box>
              
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Profile/>

                <DarkMode/>
              </Box>


            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}
