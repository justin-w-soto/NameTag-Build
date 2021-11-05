import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
state = {
    greeting: '',
    name: '',
}

handleNewGreeting = (e) => {
    this.setState({ greeting: e.target.value})
}

handleNewName = (e) => {
   this.setState({name: e.target.value})
 }
 

render() {
    const { greeting, name } = this.state;
    return(

        <>
            <Controls
               newGreeting={this.handleNewGreeting}
               newName={this.handleNewName}
               onClick={this.handleClick}
                />

            <Display 
                greeting={greeting}
                name={name}
            />    
            
        </>


    )
}
}
