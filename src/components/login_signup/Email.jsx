import React from "react"

//Mui
import TextField from "@mui/material/TextField"

export default function Email({formik}) {
    return(
        <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email Adress"
            {...formik.getFieldProps("email")}
            errer={formik.touched.email && formik.errors.email ? 1 : 0}
            helperText={formik.touched.email && formik.errors.email}
        />
    )
}