import React from "react"

//Mui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


export default function LoginHeaderModule() {
    return(
        <Box
            sx={{
                textAlign: "center",    
            }}
        >

            <Typography variant="h2" component='div'>
              Hi
            </Typography>
            
            <Typography
                sx={{
                    color: "text.secondary",
                    mb: 5
                }}
            >
                Login to your account
            </Typography>
        </Box>
    )
}