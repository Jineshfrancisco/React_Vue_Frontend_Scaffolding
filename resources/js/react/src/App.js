import React, { Component } from 'react';
import Welcome from './components/Welcome';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Welcome name="Codeigniter - React Application" content="" />
				<Welcome
					name=""
					content="A Simple React Frontend Scaffolding for framework with Bootstrap "
				/>
				<Welcome
					name="Codeigniter Version 3.1.10"
					content="Demo Build on Top CodeIgniter Version 3.1.10"
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
