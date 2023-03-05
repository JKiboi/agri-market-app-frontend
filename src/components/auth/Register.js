import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../styles/Register.css"

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      console.log(resData);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register-form-group">
          <label htmlFor="username" className="register-label">Username</label>
          <input
            type="text"
            id="username"
            {...register('username', { required: true })}
            className="register-input"
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="email" className="register-label">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="register-input"
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="password" className="register-label">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
            className="register-input"
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
