import React from "react";
//MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//Icon
import AdbIcon from '@mui/icons-material/Adb';

const styles = {
    LogoRoot : {
        display: 'inline-flex',
        alignItems: 'center',
    }
}

export default function Logo() {
    return(
        <Box style={styles.LogoRoot}>
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