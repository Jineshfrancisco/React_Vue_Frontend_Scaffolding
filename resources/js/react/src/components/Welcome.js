import React, { Component } from 'react';

class Welcome extends Component {
	render() {
		const { name, content } = this.props;
		return (
			/**
			 * Bootstrap
			 */
			<div className="container">
				<div className="card text-center">
					<div className="card-block ">
						<h2 className="card-title text-success ">{name}</h2>
						<h5 className="card-text text-danger ">{content}</h5>
					</div>
				</div>
			</div>

			/**
			 * Materialize-css
			 */
			// <div className="container">
			// 	<div className="card">
			// 		<div className="card-content">
			// 			<span className="card-title orange-text center">{name}</span>
			// 			<p className="green-text darken-2 center">{content}</p>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default Welcome;
