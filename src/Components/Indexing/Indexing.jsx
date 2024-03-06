import React from 'react'
import '../Indexing/Indexing.scss'
function Indexing({idx}) {
  return (
    <>
    <div className="indexing-container">
        <div className="indexing">
            <span>{idx}</span>
        </div>
        </div></>
  )
}

export default Indexing