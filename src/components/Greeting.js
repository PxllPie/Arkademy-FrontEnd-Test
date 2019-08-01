import React from 'react';
import '../assets/styles.css';

function Greeting(props) {
  console.log(props.name)
  return (
    <div className="bannerText">
      <h1 className="hello">
        Hello! I'm {props.name !== undefined ? props.name : 'Your Name'}
      </h1>
      <h1>
        Consult, Design, and Develop Website
            </h1>
      <p>
        Have something great in mind? Feel free to contact me. I'll help you to make it happen.
            </p>
      <button className="button">Let's Make Contact</button>
    </div>
  )
}

export default Greeting;