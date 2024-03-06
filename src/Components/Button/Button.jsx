import React from 'react'
import '../Button/Button.scss'
function Button({content}) {
  return (
    <>
    <div className="buttons">
    <button>{content}</button>
    </div>
    </>
  )
}

export default Button