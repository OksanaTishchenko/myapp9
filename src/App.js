import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello'
    }
    this.showText = this.showText.bind(this);
  }
  showText(){
    console.log('work');
    this.setState({text: 'hi'})
  } //--- так не работает

  // showText = () => {
  //     console.log('work');
  //     this.setState({text: 'hi'})
  // }  
  render(){
    return (
      <div>
        <button onClick={this.showText}>Push1</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
