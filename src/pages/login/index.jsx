import React from 'react';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import './style.scss';

const Login = () => {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
