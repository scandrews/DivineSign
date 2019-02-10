// Include React
var React = require("react");
// Include React
var Query = require("./geocode/geocodeQuery");
var helpers = require("../utils/helpers");

var Results= require("./geocode/geocodeResults");

// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{}
		};
	},

	setQuery: function(place, DOB,day, month){

		helpers.getGeocodeAPI(place, DOB,day, month).then(function(data) {
		 	this.setState({ results : {docs: data}});
		}.bind(this));
	},
	  
	render: function() {

	    return (
	    	<div className="main-container">
	    	<div className ="row">
	        <div className="col-md-6">
	      		<Query updateSearch={this.setQuery}/>
	      		<Results results={this.state.results} />
      	    </div>
      	    </div>
      	    </div>
    	);
	}
});


// Export the component back for use in other files
module.exports = Search;