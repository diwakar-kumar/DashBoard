import React, { Component } from 'react';
import './Button.module.scss';

class Button extends Component {
  render() {
  	return (
    <button className = "btn-primary dashbord-button right">
        <div>
          <img src="app/resources/msg.svg"></img>
          <div className="dashbord-button-notification">2</div>
        </div>
     </button>
    )
  }
}

export default Button; // Don’t forget to use export default!	