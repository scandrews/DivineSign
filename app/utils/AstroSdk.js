var http = require('http');
var baseUrl = "http://api.vedicrishiastro.com/v1/";
var userID =  "601148";
var apiKey = "183fc5f62971813478411c524dcd8fab";


var getResponse = (resource, data, callback) => {
	var url = baseUrl + resource;
	var auth = "Basic " + new Buffer(userID + ":" + apiKey).toString('base64');
	
	var options = {
	  "method": "POST",
	  "hostname": "api.vedicrishiastro.com",
	  "port": null,
	  "path": "/v1/"+resource, // match_making_report",
	  "headers": {
	    "authorization":auth, // "Basic NjAxMTQ4OjE4M2ZjNWY2Mjk3MTgxMzQ3ODQxMWM1MjRkY2Q4ZmFi",
	    "content-type": "application/json",
	  }
	};

	var req = http.request(options, function (res) {
	  var chunks = [];

	  res.on("data", function (chunk) {
	    chunks.push(chunk);
	  });

	  res.on("end", function () {
	    var body = Buffer.concat(chunks);
	    console.log(body.toString());
	    return callback(null, body.toString());
	  });
	});

	req.write(JSON.stringify(data));
	var rval = req.end();
};

var packageMatchMakingData = (maleBirthData, femaleBirthData) => {
    var mData = {
        'm_day': maleBirthData['date'],
        'm_month': maleBirthData['month'],
        'm_year': maleBirthData['year'],
        'm_hour': maleBirthData['hour'],
        'm_min': maleBirthData['minute'],
        'm_lat': maleBirthData['latitude'],
        'm_lon': maleBirthData['longitude'],
        'm_tzone': maleBirthData['timezone']
	};
    var fData = {
        'f_day': femaleBirthData['date'],
        'f_month': femaleBirthData['month'],
        'f_year': femaleBirthData['year'],
        'f_hour': femaleBirthData['hour'],
        'f_min': femaleBirthData['minute'],
        'f_lat': femaleBirthData['latitude'],
        'f_lon': femaleBirthData['longitude'],
        'f_tzone': femaleBirthData['timezone']
    };

    return Object.assign(mData, fData);

};


var api = {
	matchMakingCall: (resource, maleBirthData, femaleBirthData, callback)=> {
		var data = packageMatchMakingData(maleBirthData, femaleBirthData);
		return getResponse(resource, data, callback);
	}

}


module.exports = api;
