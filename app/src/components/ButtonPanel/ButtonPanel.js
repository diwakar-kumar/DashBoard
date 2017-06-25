import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './ButtonPanel.module.scss';
import { Button } from '../../components';

class ButtonPanel extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
    this.props.clickHandler(buttonName);
  }

  render() {
  	return (
      <div className = {styles.button_panel}>
        <Button name="msgButton1" clickHandler={this.handleClick}/>
        <Button name="msgButton2" clickHandler={this.handleClick}/>
      </div>
    )
  }
}

ButtonPanel.propTypes = {
  clickHandler: React.PropTypes.func,
};
export default cssModules(ButtonPanel, styles);// Don’t forget to use export default! 