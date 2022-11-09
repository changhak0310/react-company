import React from "react";
//MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//Icon
import AdbIcon from '@mui/icons-material/Adb';

export default function Logo() {
    return(
        <Box 
        sx={{
            display: 'inline-flex',
            alignItems: 'center',
        }}>
            <AdbIcon/>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
            LOGO
            </Typography>
        </Box>
    );
}