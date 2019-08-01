import React from 'react'
import '../assets/styles.css'

export default class NotificationPanel extends React.Component {

  constructor() {
    super()
    this.state = {
      style: {
        marginTop: '-100px',
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.handleNotif()
    }, 2000)
  }

  handleNotif = async () => {
    let notif = await localStorage.getItem('notif')

    if (notif == null) {
      this.setState({
        style: {
          marginTop: '0'
        }
      })
    }

    localStorage.setItem('notif', 'gone')
  }


  handleButton = () => {
    this.setState({
      style: {
        marginTop: '-100px'
      }
    })
  }

  render () {
    return(
      <div className="notifPanel" style={this.state.style}>
        <p className="notifText">
          By accessing and using this website, you acknowledge that you have read and understand our <a href="/">Cookie Policy</a>, <a href="/">Privacy Policy</a>, and our <a href="/">Term and Sevices</a>
        </p>
        <button onClick={this.handleButton} className="notifButton">Got It</button>
      </div>
    )
  }
}