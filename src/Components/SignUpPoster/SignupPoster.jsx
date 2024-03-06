import React from 'react'
import '../SignUpPoster/SignupPoster.scss'
import Button from '../Button/Button'
function SignupPoster() {
  return (
    <>
    <div className="container">
              <div className="signup-container">
                <div className="text">
                    <span>Sign up and get exclusive special deals</span>
                </div>
                <div className="btn">
                    <Button content="sign up"/>
                </div>
              </div>
    </div>
    </>
  )
}

export default SignupPoster