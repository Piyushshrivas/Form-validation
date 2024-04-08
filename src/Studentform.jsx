import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

function Studentform() {
  const paperStyle = { padding: '40px 20px', width: 250, margin: '20px auto' };
  const btnStyle = { margin: 10 };
  const initialValues = {
    name: '',
    dob: '',
    email: '',
    phoneNumber: '',
    password: '',
  };
  const onSubmit = (values, props) => {
    alert(JSON.stringify(values));
    props.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Minimum name should be 2').required('Required'),
    dob: Yup.date().required().min('1969-11-13', 'Date is too early'),
    phoneNumber: Yup.number()
      .typeError('Enter a valid phNo')
      .required('Required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Please enter e-mail'),
    password: Yup.string()
      .min(6, 'Minimum character should be 6')
      .max(9, 'Maximum charcter should be 9')
      .required('Please enter valid password'),
  });
  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <Typography variant="h6">Register Here!</Typography>
          <Typography variant="caption">
            Plaese fill this form to create an account!!
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {/* {console.log(props)} */}
              <Field
                as={TextField}
                name="name"
                label="Name:"
                placeholder="Enter your name"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="name" />}
                required
                error={props.errors.name && props.touched.name}
              />
              <Field
                as={TextField}
                name="email"
                label="Email:"
                type="email"
                placeholder="Enter e-mail"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="email" />}
                error={props.errors.email && props.touched.email}
              />
              <Field
                as={TextField}
                name="dob"
                label="Date of Birth:"
                placeholder="yyyy/mm/dd"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="dob" />}
                required
                error={props.errors.dob && props.touched.dob}
              />
              <Field
                as={TextField}
                name="phoneNumber"
                label="Ph-no:"
                placeholder="Enter contact no"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="phoneNumber" />}
                error={props.errors.phoneNumber && props.touched.phoneNumber}
              />
              <Field
                as={TextField}
                name="password"
                label="Password:"
                placeholder="Enter password"
                type="password"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="password" />}
                required
                error={props.errors.password && props.touched.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                style={btnStyle}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Studentform;
