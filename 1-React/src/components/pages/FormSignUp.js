import React from 'react'
import useForm from './useForm'
import validadeInfo from './validateInfo';
import './css/SignUp.css'

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validadeInfo);

  return (
    <div className="form-container">
      <div className="form-content-center">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign up today!</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              E-mail:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="passwordConfirm" className="form-label">
              Confirm Password:
            </label>
            <input
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              className="form-input"
              placeholder="Confirm your password"
              value={values.passwordConfirm}
              onChange={handleChange}
            />
            {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
          </div>
          <button className="form-input-btn" type="submit">Sign Up</button>
          <span className="form-input-login">
            Already have an account? Login <a href="#">here</a>
          </span>
        </form>
      </div>
    </div>
  )
}

export default FormSignUp
