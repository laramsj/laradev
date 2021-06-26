import React from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import { useState } from 'react';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ?
        (<FormSignUp submitForm={submitForm} />) :
        (<FormSuccess />)}
    </div>
  )
}

export default SignUp
