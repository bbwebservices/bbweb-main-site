var React = require('react');

var Jumbotron = React.createClass({

	render: function () {
		return (
			<div className="uk-width-medium-1-1 uk-row-first jumbo">
				<div className="uk-vertical-align uk-text-center">
					<div className="uk-vertical-align-middle uk-width-1-2">
						<h1 className="uk-heading-large">BB Web Services</h1>
						<p className="uk-text-large">Web services and stuff</p>
						<p><button className="uk-button uk-button-large">View Portfolio</button></p>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Jumbotron;