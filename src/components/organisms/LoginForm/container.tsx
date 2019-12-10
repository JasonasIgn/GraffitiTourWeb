import React from 'react'
import { Formik } from 'formik'
import { LoginForm } from '.'

const initialValues = {
    username: '',
    password: ''
}

export const LoginFormContainer = () => {
    const onSubmit = async values => {
        console.log(values)
    }
    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <LoginForm />
        </Formik>
    )
}