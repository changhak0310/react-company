import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

//MUI
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//data
import { ListItemData } from "./ListItemData";

export default function ListItem(){
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <List>
            {
                ListItemData.map((item) => {
                    return (
                        <ListItemButton 
                            onClick={()=>{
                                navigate(item.path)
                            }}
                            key={item.title}>
                            {
                                (location.pathname === item.path) ?
                                (<ListItemIcon>{item.selectIcon}</ListItemIcon>)
                                :
                                (<ListItemIcon>{item.icon}</ListItemIcon>)
                            }
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    )
                })
            }
        </List>
    )
}