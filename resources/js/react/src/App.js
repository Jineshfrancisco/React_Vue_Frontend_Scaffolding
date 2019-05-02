import React, { Component } from 'react';
import Welcome from './components/Welcome';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Welcome name="Codeigniter - React Application" content="" />
				<Welcome
					name=""
					content="A Simple React Frontend Scaffolding for Codeigniter with Bootstrap "
				/>
				<Welcome
					name="Version 3.1.10"
					content="Build on Top CodeIgniter Version 3.1.10"
				/>
				<Welcome
					name="Hello All Have a Nice Day"
					content="created by Jinesh Francis"
				/>
			</React.Fragment>
		);
	}
}

export default App;
