import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    // include button text in state since it can 
    this.state = {
      buttonText: "click me!"
    };
  }

  //handler goes here
  handleClick = () => {
    // the handler will set the text to "thanks" if it's currently "click me!" and vice versa
    this.setState(state => ({
      buttonText: state.buttonText === 'click me!' ? 'thanks' : 'click me!',
    }));
  };

  render() {
    return (
      <div>
        <p>Greetings!</p>
        {/* the button will call the handler function above when clicked */}
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    );
  }
}