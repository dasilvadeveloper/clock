import React, { PureComponent } from 'react';

export class ClockNumbers extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			clocks: {
				normal: [12,3,6,9]
			},
		};
	}

	render() { 
		return(this.state.clocks.normal.map((number, i) => <div className='main--numbers' key={i}>{number}</div>))
	}

    
}

export default ClockNumbers;
