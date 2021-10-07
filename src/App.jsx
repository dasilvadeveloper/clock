import React, { PureComponent } from 'react';
import './App.css';
import ClockNumbers from './components/ClockNumbers/ClockNumbers';

export class App extends PureComponent {
	constructor(props) {
		
		super(props);
		var debug = false;
		var sec = 0;
		var min = 0;
		var hour = 0;
		this.state = {
			count: setInterval(
				() => {
					if (!debug) {
						document.querySelector('.seconds--pointer').style.transform =
							'rotate(' + new Date().getSeconds() * 6 + 'deg) ';
						document.querySelector('.minutes--pointer').style.transform =
							'rotate(' + new Date().getMinutes() * 6 + 'deg) ';
						document.querySelector('.hours--pointer').style.transform =
							'rotate(' +
							(new Date().getHours() * 30 + new Date().getMinutes() / 2) +
							'deg) ';
					} else {
						sec = sec + 30;
						if (sec >= 60) {
							sec = 0;
							min++;
						} else {
							if (min >= 60) {
								min = 0;
								hour++;
							}
						}

						document.querySelector('.seconds--pointer').style.transform =
							'rotate(' + sec * 6 + 'deg) ';
						document.querySelector('.minutes--pointer').style.transform =
							'rotate(' + min * 6 + 'deg) ';
						document.querySelector('.hours--pointer').style.transform =
							'rotate(' + (hour * 30 + min / 2) + 'deg) ';
					}
				},
				!this.debug ? 50 : 1000
			),
		};
	}

	render() {
		
		return (
			<div className="clock-container">
				<span>
					Real-time clock made by{' '}
					<a href="https://t04-hendrick.vigion.pt/">@dasilvadeveloper</a>
				</span>
				<div className="clock">
					<video autoPlay muted loop id="myVideo">
						<source src={process.env.PUBLIC_URL + '/clock_bg.mp4'} type="video/mp4" />
					</video>
					<div className="blur"></div>
					<ClockNumbers></ClockNumbers>
					<div className="hours--pointer"></div>
					<div className="minutes--pointer"></div>
					<div className="seconds--pointer"></div>
				</div>
			</div>
		);
	}

	componentDidMount(){
		document.getElementById('myVideo').addEventListener('loadedmetadata', function() {
			this.currentTime = 4000;
		  }, false);
	}
}

export default App;
