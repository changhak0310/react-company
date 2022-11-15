import React from "react";

//Modules
import HeaderModule from '../modules/header/HeaderModule'
import SidebarModule from '../modules/sidebar/SidebarModule'
import UserModule from "../modules/user/UserModule";
import CommuteModule from "../modules/user/CommuteModule";

//Mui
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";

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
                        <Stack spacing={4} direction="row">
                            <UserModule/>
                            <CommuteModule/>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    );
}