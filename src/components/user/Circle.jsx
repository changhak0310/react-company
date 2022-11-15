import React from "react";

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress, {circularProgressClasses} from '@mui/material/CircularProgress';

export default function Circle(props) {
    return( 
        <Box 
            sx={{ 
                position: 'relative', 
                display: 'inline-flex',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    margin: 'auto'
                }}
            >
                <CircularProgress 
                    variant="determinate" 
                    {...props}
                    value={100}
                    size={400}
                    sx={{
                        color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                />
                <CircularProgress 
                    variant="determinate" 
                    size={400}
                    {...props}
                    sx={{
                        color: 'main.primary',
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                />
            </Box>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h2" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    )
}