// Include React
var React = require("react");
// Include React
var Query = require("./Horoscope/DailyHoroscopeQuery");
var helpers = require("../utils/helpers");
var Results= require("./Horoscope/DailyHoroscopeResults");

// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{}
		};
	},


	setQuery: function(newSign, newPeriod){
		 helpers.getHoroscope(newSign, newPeriod).then(function(data) {
		 	this.setState({ results : {docs: data}});
		 }.bind(this));
	},


	render: function() {
	    return (
	        <div className="main-container">
	        <div className="row">
	      		<Query updateSearch={this.setQuery}/>
	      		<Results results={this.state.results} />
	        </div>
	        </div>
		);
	}
});


// Export the component back for use in other files
module.exports = Search;