import React from "react";

//Modules
import HeaderModule from '../modules/header/HeaderModule'
import SidebarModule from '../modules/sidebar/SidebarModule'
import UserModule from "../modules/user/UserModule";

//Mui
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
                    <Box
                    sx={{
                        backgroundColor: 'primary.dark',
                        width: '100%',
                        height: '100vh',
                    }}
                >
                    <Box
                        sx={{
                            margin: '2rem',
                        }}
                    >
                        <UserModule/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}