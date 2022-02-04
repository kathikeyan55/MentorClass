import React from 'react';

function Button(props) {
  
  return <button
  className="Button"
  onClick={props.onPress}
  >{props.name}</button>;
}

export default Button;
