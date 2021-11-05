import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => {
   
  return (
    <>
        
      <main style={{
        margin: '5rem', 
        backgroundColor: 'red', 
        border: 'black solid 1px', 
        borderRadius: '.75rem',
        height: '20rem', 
        width: '30rem'
      }}>
        
        <section style={{
          color: 'white', 
          textAlign: 'center', 
          fontSize: '2rem', 
          fontFamily: 'monospace'
        }}>
          <h1>{greeting}</h1>
        </section>

        <section style={{
          backgroundColor: 'white', 
          display:'flex',  
          justifyContent: 'center', 
          alignContent: 'center', 
          fontSize: '2rem', 
          fontFamily: 'cursive'
        }}>
          <h2>{name}</h2>
        </section>


        
        
      </main>
        
    </>
  );   
};

Display.propTypes = {};

export default Display;
