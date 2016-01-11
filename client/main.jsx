var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./components/Navbar.jsx');
var Portfolio = require('./components/Portfolio.jsx');
var Jumbotron = require('./components/Jumbotron.jsx');

var BBWeb = React.createClass({

	getInitialState: function () {
		return {
			websites: [
				{
					name: "Brunelli Beats",
					website: "#",
					imgSrc: "./../../img/portfolio/brunelli.png"
				},
				{
					name: "Robotic Pirate Monkey",
					website: "#",
					imgSrc: "./../../img/portfolio/rpm.png"
				},
				{
					name: "Tri County Office Furniture",
					website: "#",
					imgSrc: "./../../img/portfolio/tcof.png"
				},
				{
					name: "ImageTek Labels",
					website: "#",
					imgSrc: "./../../img/portfolio/imagetek.png"
				},
				{
					name: "LBLS",
					website: "#",
					imgSrc: "./../../img/portfolio/lbls.png"
				},
				{
					name: "Realtid",
					website: "#",
					imgSrc: "./../../img/portfolio/realtid.png"
				},
				{
					name: "Cloudncoil",
					website: "#",
					imgSrc: "./../../img/portfolio/cloudncoil.png"
				},
				{
					name: "Blvck Diamond Vapor",
					website: "#",
					imgSrc: "./../../img/portfolio/blvckdiamond.png"
				},
			]
		}
	},

	render: function () {
		return (
			<div className="uk-container uk-container-center uk-margin-top">
				<Navbar />
				<Portfolio websites={this.state.websites}/>
			</div>
		)
	}
});


ReactDOM.render(<BBWeb />, document.getElementById('container'));

