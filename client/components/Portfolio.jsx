var React = require('react');


var Portfolio = React.createClass({
	
	render: function () {
		var works = this.props.websites.map( function (element, index) {
			return ( <li className="animated flipInX" style={thumbWidth}><a href={element.website}><img src={element.imgSrc}/></a></li> )
		})
		return (
			<div>
				<ul className="uk-thumbnav uk-flex-center">
					{works}
				</ul>
			</div>
		)
	}

});

var thumbWidth = {
	width: '30%',
	height: 'auto'
}

module.exports = Portfolio;