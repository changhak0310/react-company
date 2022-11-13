import React from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

//MUI
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

//Components
import Name from "../../components/login_signup/Name";
import Email from "../../components/login_signup/Email";
import Password from "../../components/login_signup/Password";
import PasswordConfirm from "../../components/login_signup/PasswordConfirm";

export default function SignUpFormModule() {

    //SignUp 스키마
    const SignUpSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Name is required"),
        email: Yup.string()
            .email("Email must be a valid email adress")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required"),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password is not matched')
            .required("PasswordConfirm is required"),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "", 
            passwordConfirm: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: (e, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false);
                console.log(e);
            },1000);
        }
    })

    const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
    
    return(
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit} method="post">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >   
                    <Name formik={formik}/>
                    <Email formik={formik}/>
                    <Password formik={formik}/>
                    <PasswordConfirm formik={formik} />
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                    >
                        {isSubmitting ? "loading..." : "SingUp"}
                    </LoadingButton>
                </Box> 
            </Form>
        </FormikProvider>
    )
}