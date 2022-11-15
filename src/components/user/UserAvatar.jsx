import React from "react";

//Mui
import Avatar from '@mui/material/Avatar';

export default function UserAvatar(){
    return(
        <Avatar
            sx={{
                width: 350,
                height: 350,
                margin: 'auto',
            }}
            alt="Default"
        >

        </Avatar>
    );
}