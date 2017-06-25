import React from 'react';
import { ButtonPanel } from '../components';

class Main extends React.Component {
	handleClick(buttonName){
    	alert("My First Component");
  	}
    render() {
      return (
        <ButtonPanel clickHandler={this.handleClick}/>
      );
    }
}
export default Main;
