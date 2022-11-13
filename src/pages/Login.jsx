import React from "react"

//Mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//Module
import LoginHeaderModule from "../modules/login/LoginHeaderModule";
import LoginFormModule from "../modules/login/LoginFormModule";

export default function Login( ) {
    return (
        <Box
            sx={{
                background: "rgb(249, 250, 251)",
                height: "100vh",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        maxWidth: '480px',
                        padding: '25px',
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        background: "#fff",   
                    }}
                >
                    
                    <LoginHeaderModule/>

                    <LoginFormModule/>

                </Box>
            </Container>
        </Box>
    )
}