import React from 'react';
import  '../assets/styles.css';

export default class Newslater extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      errEmail: '',
      newslater: true,
      style: {
        marginLeft: '-1500px',
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 450) {
      
      if (this.state.newslater) {
        this.setState({
          style: {
            marginLeft: '0',
          }
        })
      }
    }
  }

  handleClose = () => {
    this.setState({
      style: {
        marginLeft: '-1500px',
      },
      newslater: false
    })
  }

  emailChange = async (event) => {
    await this.setState({
      email: event.target.value
    })

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
      this.setState({
        errEmail: false
      })
    } else {

      this.setState({
        errEmail: 'Enter email correctly'
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.handleClose()
    alert('successfully input! Thank you')
  }

  render () {
    return(
      <div className="newslater" style={this.state.style}>
        <div className="newslaterHead">
          <button onClick={this.handleClose} className="closeNewslater">X</button>
          <h3>
            Get latest updates in Web Technologies
          </h3>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <form method="post">
          <input onChange={this.emailChange} className="input" placeholder="Email address" type="text" name="name" />
          <input onClick={this.handleSubmit} disabled={this.state.errEmail !== false} className="submit" type="submit" value="Submit" />
          <p className="inputValidation">{this.state.errEmail}</p>
        </form>
      </div>
    )
  }
}