import React from "react"

//Mui
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"

//Icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Password({formik}) {
    const [showPassword, setShowPassword] = React.useState(false);

    return(
        <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...formik.getFieldProps("password")}
            errer={formik.touched.password && formik.errors.password ? 1 : 0}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
            }}
        />
    )
}