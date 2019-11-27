import React from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.initialState = {
      array: [],
      formSubmitted: false,
      operation: ''

    }
    this.state = this.initialState
  }

  handleForm = (event) => {
  event.preventDefault()
  console.log('submit happened')
  this.setState ({
    formSubmitted: true
  })

  }

  handleArrayValues = (event) => {
    console.log('array values', event.target.value)
    this.setState({
      array: [event.target.value]
    })

  }

  handleSelect = (event) => {
    this.setState({
      operation: ''
    })

  }



  render () {
    console.log(this.state)
    const {array, formSubmitted, operation} = this.state

    if (formSubmitted) {
      return (
        <div className='submitted'>
          <h1>Hello World</h1>
        </div>
      );
    }
    return (
        <div className = "App">
          <h1>Enter each number in the array, separated by a ','</h1>
          <form onSubmit={this.handleForm}>
            <input 
              type='text'
              value={array}
              onChange={this.handleArrayValues}
            />

            <select 
            value={operation}
            onChange={this.handleSelect}
            >
              <option value=''></option>
              <option value='sum'>Sum</option>
              <option value='average'>Average</option>
              <option value='mode'>Mode</option>
            </select>
            <button>Calculate</button>
          
          </form>
        </div>
    );

  }
}



export default App;
