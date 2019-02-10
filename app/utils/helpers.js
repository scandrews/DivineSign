var axios = require('axios'); 
var Astroapi = require('./AstroSdk'); 
var getZodiacSign = require("horoscope");
var helper = {

	getHoroscope: function(newSign, newPeriod){
	 	return axios.post("/api", {newSign: newSign});
	},

//-----------------
	getCurrentUser: function(currentuser){
		return axios.get("/loggedinuser", {currentuser: currentuser} );
	},

	getNewMatch: function(newMatch){
		return axios.get("/match", {newMatch: newMatch});
	},
//--------------------


	 getGeocodeAPI: function(address, dob,day,month){

	 	var sign = getZodiacSign.getSign({"month": parseInt(month), "day": parseInt(day)});
		var QueryURL= 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address)+'&key=AIzaSyCfYfZuZYiwlx4W9-vYYI0bCLILm-pj9hA';
		
		return axios.get(QueryURL,{

			}).then(function(results){
				var lat = results.data.results["0"].geometry.location.lat;
				var lng = results.data.results["0"].geometry.location.lng;
				var DOB = "01-02-2004"; //dob;
		        var llt = {"lat": lat,
		        		"lng": lng,
		        		"TZ":"5.5",
		        		"sign" : sign }
	    return llt;			
		});
},

	getMatchMakingResults: function(maleJson,femaleJson, callback){
				var resource = "match_making_report";
				var matchMakingData = Astroapi.matchMakingCall(resource, maleJson, femaleJson
					, function(error, result){

					    if(error)
					    {
					        console.log("Error returned!!");
					    }
					    else
					    {
					        var jsonResult = JSON.parse(result)
					        return callback(null, jsonResult);
					    }
					} // call back
				);

	}
}


module.exports = helper;