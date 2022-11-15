import React from "react";

//MUI
//import { , , , , , ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
// import DrawerProps from "@mui/material/DrawerProps";
// import DrawerProps from "@mui/material/DrawerProps";
// import DrawerProps from "@mui/material/DrawerProps";

//Components
import ListItem from "../../components/sidebar/ListItem";

export default function Sidebar() {
    return(
        <Drawer
        variant="permanent"
        anchor="left"
        sx={{
            '& .MuiPaper-root': {
                backgroundColor: 'primary.light',
                width: '240px',
                position: 'relative',
                height: '100vh',

            }
        }}>
            <Typography>
                여기다 뭐하지
            </Typography>

            <ListItem/>
        </Drawer>
    )
}