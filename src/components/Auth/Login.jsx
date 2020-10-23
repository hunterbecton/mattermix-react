import React, { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import Layout from '../Layout/Layout';
import H1 from '../Typography/H1';
import { ReCaptcha } from './ReCaptcha';
import { useAuth } from '../../hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      'Invalid email'
    ),
  captchaToken: Yup.string().required('Verify you are a human'),
});

const LoginFormContainer = styled.form`
  grid-column: 4 / span 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    box-sizing: border-box;
    margin: 1rem 0;
    background-color: ${(props) => props.theme.colors.black02};
    color: ${(props) => props.theme.colors.white01};
    /* font-family: ${(props) => props.theme.fonts.main}; */
    font-size: 1.25rem;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
  }

  input:focus {
    outline: 0.15rem solid ${(props) => props.theme.colors.blue01};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.white01};
  }

  input[type='email'] {
    width: 60%;
  }

  input[type='submit'] {
    padding: 0.75rem 1.5rem;
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.blue01};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white01};
    font-size: 0.875rem;
    font-weight: 700;
    transition: ${(props) => props.theme.animations.button};
  }

  input[type='submit']:hover,
  input[type='submit']:focus {
    background-color: ${(props) =>
      props.hover ? props.hover : props.theme.colors.blue02};
  }

  .login__title {
    margin-bottom: 1rem;
    text-align: center;
  }

  .login__subtitle {
    color: ${(props) => props.theme.colors.grey01};
    margin-bottom: 1rem;
    text-align: center;
  }

  .login__error {
    color: ${(props) => props.theme.colors.red01};
    margin-bottom: 1rem;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

const Login = () => {
  const { login } = useAuth();

  const theme = useTheme();

  const submitRef = useRef(null);

  const emailRef = useRef(null);

  const {
    register,
    handleSubmit,
    errors,
    reset,
    setValue,
    clearErrors,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      login(data.email).then((res) => {
        if (res.status === 'success') {
          toast('Check your email to complete. 💌');
        } else {
          toast.error('Error logging in.');
        }
      });
    } catch (error) {
      toast.error('Error logging in.');
    }

    reset();
  };

  const onVerifyCaptcha = (token) => {
    setValue('captchaToken', token);
    clearErrors(['captchaToken']);
    submitRef.current.focus();
  };

  useEffect(() => {
    register({ name: 'captchaToken' });
  });

  // Set focus on email
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const watchCaptcha = watch('captchaToken');

  return (
    <Layout>
      <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
        <H1 className='login__title'>Login</H1>
        <p className='login__subtitle'>
          Enter your email and you'll be sent a one-time link to complete login.
        </p>
        <input
          type='email'
          name='email'
          placeholder='Email'
          ref={(e) => {
            register(e);
            emailRef.current = e;
          }}
        />
        {errors.email && <p className='login__error'>{errors.email.message}</p>}
        {errors.captchaToken && (
          <p className='login__error'>{errors.captchaToken.message}</p>
        )}
        <ReCaptcha
          onVerifyCaptcha={onVerifyCaptcha}
          backgroundColor={
            watchCaptcha ? theme.colors.black01 : theme.colors.black03
          }
          hover={watchCaptcha ? theme.colors.black01 : theme.colors.black02}
          verified={watchCaptcha}
        />
        <input type='submit' value='Submit' ref={submitRef} />
      </LoginFormContainer>
    </Layout>
  );
};

export default Login;
