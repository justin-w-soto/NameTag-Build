import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
state = {
    greeting: '',
    name: '',
}

render() {

    return(

        <>
        
        <Controls />
        <Display />
        
        </>


    )
}
}
