import React, { useState } from "react";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

//Mui
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

//Components
import Email from "../../components/login_signup/Email";
import Password from "../../components/login_signup/Password";
import LinkPath from "../../components/login_signup/LinkPath";

export default function LoginFormModule(){

    //스키마
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("이메일을 입력해 주세요.")
            .required("이메일이 필요합니다."),
        password: Yup.string().required("비밀번호가 필요합니다."),
    })

    //formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (e, { setSubmitting }) => {
            console.log(e)
            setTimeout(() => {
                setSubmitting(false)
            }, 1000)
        }
    })

    const { 
        errors, 
        touched, 
        values, 
        isSubmitting, 
        handleSubmit, 
        getFieldProps 
    } = formik;

    return(
        <FormikProvider value={formik}>
            <Form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
                method="post"
            >
            
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >

                    <Email formik={formik}/>
                    <Password formik={formik} />
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                    >
                        {isSubmitting ? "loading..." : "Login"}
                    </LoadingButton>

                    
                </Box>
                    <LinkPath navigation={"signup"}/>
            </Form>
        </FormikProvider>
    )
}