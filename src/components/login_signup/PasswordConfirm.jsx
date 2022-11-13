import React from "react"

//Mui
import TextField from "@mui/material/TextField"

export default function PasswordConfirm({formik}) {
    return(
        <TextField
            fullWidth
            autoComplete="passwordConfirm"
            type="password"
            label="PasswordConfirm"
            {...formik.getFieldProps("passwordConfirm")}
            error={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? true : false}
            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
        />
    )
}