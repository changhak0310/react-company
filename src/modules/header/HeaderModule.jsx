import * as React from 'react';
//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//components
import Logo from '../../components/header/Logo';
import Profile from '../../components/header/Profile';

export default function HeaderModule() {
    return(
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}> 
              <Logo/>

              <Profile/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}
