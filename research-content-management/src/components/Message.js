import react, { Component } from 'react'


class Message extends Component{
    render(){
        return(
            <div>
                 <h1>Welcome {this.props.fullName}</h1>
                 <button className='hello'>Click me!</button>
            </div>
            
        )
    }
}

export default Message