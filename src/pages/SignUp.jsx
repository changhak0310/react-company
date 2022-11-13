import React from "react";

//Mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//Modules
import SignUpFormModule from "../modules/signUp/SignUpFormModule";
import SignUpHeaderModule from "../modules/signUp/SignUpHeaderModule";
import LinkPath from "../components/login_signup/LinkPath";

export default function SignUp() {
    return(
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
                    <SignUpHeaderModule/>
                    <SignUpFormModule/>
                    <LinkPath navigation="login"/>
                </Box>
            </Container>
        </Box>
    )
}