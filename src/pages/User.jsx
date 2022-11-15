import React from "react";

//Modules
import HeaderModule from '../modules/header/HeaderModule'
import SidebarModule from '../modules/sidebar/SidebarModule'

//Mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function User() {
    return (
        <>
            <HeaderModule/>

            <Box
                sx={{
                    display: 'flex'
                }}
            >
                <SidebarModule/>
                <Container
                    sx={{
                        backgroundColor: 'primary.dark',
                        width: '100%',
                        height: '100vh',
                    }}
                >
                    <Box>dsddsadsadaasasd</Box>
                </Container>
            </Box>
        </>
    );
}