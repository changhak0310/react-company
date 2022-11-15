import React from 'react';

//MUI
import Typography from '@mui/material/Typography';

export default function UserName( {company, name} ) {
    return(
        <>
            <Typography variant="h2" component="h2"
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" component="div"
                    sx={{
                        textAlign: 'center',
                        marginBottom: '12px',
                    }}
                >
                    {company}
                </Typography>
                {name}
            </Typography>
        </>
    )
}