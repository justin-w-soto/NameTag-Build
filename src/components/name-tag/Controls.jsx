import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ greeting, name, newName, newGreeting }) => {
  return (
    <>
        
      <form >
        <label htmlFor="your greeting"> Your Greeting
          <input 
            placeholder="Hello"
            id="greeting" 
            type="text" 
            name="greeting" 
            value={greeting} 
            onChange={newGreeting}>
              
          </input>
        </label>


        <label htmlFor="your name"> Your Name
          <input 
            placeholder="Randy" 
            id="name" 
            type="text" 
            name="name" 
            value={name} 
            onChange={newName}></input>
        </label>

      </form>
    
    </>
  );
};

Controls.propTypes = {};

export default Controls;
