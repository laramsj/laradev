import React from 'react'
import './css/SignUp.css'

const FormSuccess = () => {
  return (
    <div className="form-container">
      <div className="form-content-center">
        <div className="form-sucess">
          <h1>Your login was created!</h1>
          <button className="form-input-btn" type="submit">Return Home</button>
        </div>
      </div>
    </div>
  )
}

export default FormSuccess
