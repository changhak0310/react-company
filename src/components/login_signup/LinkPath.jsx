import { Link as RouterLink } from "react-router-dom";

//Mui
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

export default function LinkPath({navigation}) {

    const path = navigation === 'login' ? '../login' : '../signup'

    return(
        <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
        >
            {
                navigation === 'login' ?
                (`Have an account?${" "}`)
                :
                (`Don’t have an account?${" "}`)
            }
            <Link variant="subtitle2" component={RouterLink} to={path}>
                {
                    navigation === 'login' ?
                    ('Login')
                    :
                    ('Sign up')
                }
            </Link>
        </Typography>
    )
}