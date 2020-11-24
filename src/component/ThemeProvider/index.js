import React, { Component } from 'react';

export default class ThemeProvider extends Component {
  state = {
    theme: ''
  }

  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({theme: 'dark'});
      window.localStorage.setItem('theme', 'dark');
    } else {
      this.setState({theme: 'light'});
      window.localStorage.setItem('theme', 'light');
    }
  }

  render() {
    return (
      <button onCLick={this.toggleTheme}>Theme</button>
    );
  }
}