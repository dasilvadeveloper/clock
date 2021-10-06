import React, { PureComponent } from 'react';
import './App.css';
import ClockNumbers from './components/ClockNumbers/ClockNumbers';

export class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: setInterval(() => {
				document.querySelector('.seconds--pointer').style.transform =
					'rotate(' + new Date().getSeconds() * 6 + 'deg) ';
				document.querySelector('.minutes--pointer').style.transform =
					'rotate(' + new Date().getMinutes() * 6 + 'deg) ';
				document.querySelector('.hours--pointer').style.transform =
					'rotate(' + new Date().getHours() * 6 + 'deg) ';
			}, 1000),
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
					<ClockNumbers></ClockNumbers>
					<div className="hours--pointer"></div>
					<div className="minutes--pointer"></div>
					<div className="seconds--pointer"></div>
				</div>
			</div>
		);
	}
}

export default App;
