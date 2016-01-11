var React = require('react');

var Navbar = React.createClass({

	render: function () {
		var routes = ["home", "services", "contact"]
		var nav = routes.map( function (element, index) {
			return (<li><a href="#"> {element} </a></li>)
		});

		return (
			<div className="uk-navbar uk-margin-large-bottom">
				<h1 className="uk-navbar-brand">BB Web Services</h1>
				<ul className="uk-navbar-nav uk-navbar-flip">
					{nav}
				</ul>
			</div>
		)

	}

});

module.exports = Navbar;