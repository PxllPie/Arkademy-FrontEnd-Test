import React from 'react'
import '../assets/styles.css'

function Column(props) {
  return (
    <div className="col">
      <div className="headerColumn">
        <h3>
          {props.title}
        </h3>
        <img src={props.logo} alt="logo" width="35px" />
      </div>
      <p>
        {props.text}
      </p>
    </div>
  )
}

export default Column