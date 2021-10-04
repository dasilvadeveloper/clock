import React, { PureComponent } from 'react';
import './App.css'

export class App extends PureComponent {
	constructor(props) {
    
		super(props);
		this.state = {
			seconds: parseInt(new Date().getSeconds() * 6),
			minutes: parseInt(new Date().getMinutes() * 6),
			hour: parseInt(new Date().getHours() * 6),
      count: setInterval(() => {
        document.querySelector('.seconds--pointer').style.transform = 'rotate(' + this.state.seconds + 'deg) ';
        document.querySelector('.minutes--pointer').style.transform = 'rotate(' + this.state.minutes + 'deg) ';
        document.querySelector('.hours--pointer').style.transform = 'rotate(' + this.state.hour + 'deg) ';
        
        console.log(  this.state.seconds);
        if(this.state.seconds >= 360){
          this.state.minutes += 6;
          this.state.seconds = 0;
          if(this.state.minutes >= 360){
            this.state.minutes = 0
            this.hour += 6;
          }else{
            this.hour += 6;
          }
        }else{
          this.state.seconds += 6; 
        }
      }, 1000)
		};
	}

	render() {
		
    console.log(new Date().getSeconds())
		return (
			<div className="clock">
				<div className="hours--pointer"></div>
				<div className="minutes--pointer"></div>
				<div className="seconds--pointer"></div>
			</div>
		);
	}
}

export default App;
