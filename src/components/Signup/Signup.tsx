import React, { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(/^[A-Za-z]+$/, 'Name must contain only alphabetic characters')
      .min(3, 'Name must be at least 3 characters')
      .max(255, 'Name must not exceed 255 characters'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(255, 'Password must not exceed 255 characters'),
  });
  

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form-container">
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <Field
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="input-field"
          />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email:</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            className="input-field"
          />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your password:</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            className="input-field"
          />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>
        <button type="submit" className="submit-button">
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
