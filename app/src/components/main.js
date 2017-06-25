import React from 'react';
import { Button } from '../components';

class Main extends React.Component {
	handleClick(){
    	alert("My First Component");
  	}
    render() {
      return (
        <Button name="SampleButton" clickHandler={this.handleClick}/>
      );
    }
}
export default Main;
