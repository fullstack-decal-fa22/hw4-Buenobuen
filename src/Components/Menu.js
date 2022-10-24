import React from 'react';
import Color from './Color'

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color handleClick = {props.handleClick} color = "yellow"> </Color>
          <Color handleClick = {props.handleClick} color = "purple"> </Color>
          <Color handleClick = {props.handleClick} color = "green"> </Color>
          <Color handleClick = {props.handleClick} color = "orange"> </Color>
      </div>
    );
}

export default Menu;