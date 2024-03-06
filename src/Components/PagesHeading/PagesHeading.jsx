import React from 'react'
import '../PagesHeading/PagesHeading.scss'
function PagesHeading({title}) {
  return (
    <>
   
        <div className="pageheading">
           <span>{title}</span>
        </div>

    </>
  )
}

export default PagesHeading