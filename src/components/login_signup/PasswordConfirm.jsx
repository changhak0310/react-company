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
            errer={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? 1 : 0}
            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
        />
    )
}