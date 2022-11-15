import React from "react";

//MUI
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

//components
import UserAvatar from "../../components/user/UserAvatar";
import UserName from "../../components/user/UserName";
import UserState from "../../components/user/UserState";

export default function UserModule(){
    return(
        <Card
            sx={{
                maxWidth: '500px',
                height: '840px'
            }}
        >
            <CardContent>
                <Stack spacing={3}>

                    <UserAvatar/>
                    <UserName company="(주) 선린컴퍼니" name="이창학"/>
                    <UserState/>

                </Stack>
            </CardContent>
        </Card>
    )
}