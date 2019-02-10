// Include React
var React = require("react");
// Include React
var Query = require("./Search/Query");
var helpers = require("../utils/helpers");
var Results= require("./Search/Results");
var GeoQuery = require("./geocode/geocodeQuery");
var GeoResults = require("./geocode/geocodeResults");

// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{},
			GeoResults: {}
		};
	},

	setQuery: function(place, DOB,day, month){
		 helpers.getGeocodeAPI(place, DOB,day, month).then(function(data) {
			this.setState({ GeoResults : {docs: data}});
		 }.bind(this));
	},


	setMatchQuery: function(maleJson,femaleJson){
		 helpers.getMatchMakingResults(maleJson,femaleJson, 
		 	function(error, data){
			this.setState({ results : {docs: data}});
		 }.bind(this));
	},
	

	render: function() {

	    return (
	      <div className="main-container">
	       <div className="row">
	      		<Query updateSearch={this.setMatchQuery}/>
	      		<GeoQuery updateSearch={this.setQuery}/>
	      		<GeoResults results={this.state.GeoResults} />
	      		<Results results={this.state.results} />
	      		
	      </div>
	      </div>
	   	);
	}
});

		// Export the component back for use in other files
module.exports = Search;