import React from "react"

//Mui
import TextField from "@mui/material/TextField"

export default function Name({formik}) {
    return(
        <TextField
            fullWidth
            autoComplete="username"
            type="name"
            label="Name"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={formik.touched.name && formik.errors.name}
        />
    )
}