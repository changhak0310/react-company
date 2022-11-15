import React from "react";

//Mui
import Avatar from '@mui/material/Avatar';

export default function UserAvatar(){
    return(
        <Avatar
            sx={{
                width: 400,
                height: 400,
                margin: 'auto',
            }}
            alt="Default"
        >

        </Avatar>
    );
}