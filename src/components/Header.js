import React from 'react';
import '../assets/styles.css'
import logo from '../assets/images/arkademylogo.png'

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      headerColor: 'transparent'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 80) {

      this.setState({
        headerColor: 'white'
      })
    } else {

      this.setState({
        headerColor: 'transparent'
      })
    }
  }

  render() {
    return (
      <div className="header" style={{ backgroundColor: this.state.headerColor }}>
        <img src={logo} alt="logo" width="100" />
      </div>
    )
  }
}