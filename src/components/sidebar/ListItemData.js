import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';


export const ListItemData = [
    {
        title: "USER",
        path: "/user",
        selectIcon: <PersonIcon/>,
        icon: <PersonOutlineOutlinedIcon/>
    },
    {
        title: "SCHEDULE",
        path: "/schedule",
        selectIcon: <CalendarMonthIcon/>,
        icon: <CalendarMonthOutlinedIcon/>
    },
    {
        title: "TODO",
        path: "/todo",
        selectIcon: <ListAltTwoToneIcon/>,
        icon: <ListAltIcon/>
    },
]