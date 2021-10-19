import React from 'react';

var Cows = function(props) {
  console.log(props.sam);
  return <li>{props.cow.cowName}</li>
}

export default Cows;