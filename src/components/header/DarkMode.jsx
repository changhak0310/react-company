import React from "react";
//Theme
import { useTheme } from '@mui/material/styles';

//MUI
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

//ICON
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//recoil
import { useRecoilState } from 'recoil'
import { darkModeAtom } from '../../recoil/Atom'

export default function DarkMode() {
    const [mode, setMode] = useRecoilState(darkModeAtom);
    const colorMode = React.useMemo(
        () => ({
          toggleColorMode: () => {
            setMode((prevMode) =>
              prevMode === 'light' ? 'dark' : 'light',
            );
          },
        }),
        [],
      );

    const theme = useTheme();
    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.primary',
        }}
        >
            <IconButton 
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
              }} 
              onClick={colorMode.toggleColorMode} 
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}