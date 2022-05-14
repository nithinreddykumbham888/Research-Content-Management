import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        // this.count = 0
      super(props)
      this.state = {
         count : 0
      }
    }
    
    increment(){
        if (this.state.count == 5) {
            this.setState({
                count : 0
            }) 
        }
        this.setState({
            count : this.state.count + 1
        }) 

    }

  render() {
    return (
        <div>
      <div>
        count - {this.state.count}
        </div>
        <button onClick={() => this.increment()}>Increment</button>
        </div>
    )
  }
}

export default Counter
