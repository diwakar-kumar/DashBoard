import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './Button.module.scss';
var msgImage  = require('../../../resources/msg.svg')

class Button extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.clickHandler(this.props.name);
  }

  render() {
  	return (
    <button className = {styles.btn} id={`button-item-${this.props.name}`} onClick={this.handleClick}>
        <div>
          <img src={msgImage}></img>
        </div>
     </button>
    )
  }
}

Button.propTypes = {
  name: React.PropTypes.string,
  clickHandler: React.PropTypes.func,
};
export default cssModules(Button, styles);// Don’t forget to use export default! 