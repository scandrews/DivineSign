// Inclue the React library
// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Search = require("../components/Search");
var DailyHoroscope = require("../components/DailyHoroscope");
var geocode = require("../components/geocode");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/horoscope" component={Main}>

     {/* If user selects Search or Saved show the appropriate component */}
      <Route path="/Search" component={Search} />
      <Route path="/DailySearch" component={DailyHoroscope} />
       <Route path="/geocode" component={geocode} />
      {/*<Route path="/Saved" component={Saved} />/*}

     {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={DailyHoroscope} /> 
      {/*<IndexRoute component={Search} />*/}

   </Route>
  </Router>
)