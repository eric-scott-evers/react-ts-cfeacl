import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

function Tool(props) {
  const dest = props.dest;
  return (
      <div>
        <h3>Destination: {dest} </h3> 
      </div>
  );
}

Tool.defaultProps = {
  dest: "Home"
}

export default Tool;