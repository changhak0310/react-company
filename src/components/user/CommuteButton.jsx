import React from "react";

//MUI
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CommuteButton(props) {
    return(
        <Button variant="outlined" fullWidth={false}
            sx={{
                width: '150px',
                color: 'primary.main',
            }}
            {...props}
        >
            <Typography variant={'h5'} component={'div'}
                sx={{
                    color: 'primary.main'
                }}
            >
                출근하기
            </Typography>
        </Button>
    )
}