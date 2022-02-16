import React from 'react';
import logo from './itoapp_logo_light.svg';

class LogoLight extends React.Component {
	render() {
		let alignstyle;
		if (this.props.logoalign) {
			alignstyle = `uk-text-${this.props.logoalign}`;
		}
		return (
			<div
				className={`logolight ${alignstyle}`}
				logoalign={this.props.logoalign}
			>
				<img src={logo} alt="In This Order App" />
			</div>
		);
	}
}

export default LogoLight;
