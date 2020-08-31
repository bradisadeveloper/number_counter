import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        count: 0
      }
      // Had to bind both handleClick and resetToZero methods inside constructor to make the methods work
      this.handleClick = this.handleClick.bind(this)
      this.resetToZero = this.resetToZero.bind(this)
    }
    // Increment the number by one
    handleClick() {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }
    // Reset the count to zero
    resetToZero() {
      this.setState(prevState => {
        return {
          count: 0
        }
      })
    }

    render() {
      return(
        <div>
          <h1>Number Counter</h1>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Change!</button>
          <button onClick={this.resetToZero}>Reset</button>
        </div>
      )
    }
  }

export default App;
