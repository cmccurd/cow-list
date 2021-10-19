import React from 'react';
import Parse from '../src/Parse.js';

var Cows = function(props) {
  return (<div>
            <li onClick={() => props.onClick(props.cow)}>{props.cow.cowName}</li>
            <button onClick={() => props.handleOnEdit(props.cow)}>edit</button>
            <button onClick={() => props.deleteOnClick(props.cow) }>delete</button>
          </div>)
}

export default Cows;