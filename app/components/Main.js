// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
// Create the Main component
var Main = React.createClass({

 render: function() {

    return (
        // We can only render a single div. So we need to group everything inside of this main-container one
        <div className="main-container">
          <div className="container">
            {/* Navbar */}
            <nav className="navbar navbar-default" role="navigation">
              <div className="container-fluid">
                <div className="navbar-header">

                  <button
                    type="button"
                       className="navbar-toggle"

                       data-toggle="collapse"
                       data-target=".navbar-ex1-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>

                  <Link className="navbar-brand" to="/DailySearch">Horoscope</Link>
                  <Link className="navbar-brand" to="/Search">Match-Making</Link>
                  <Link className="navbar-brand" to="/geocode">Geocode</Link>

                </div>

                </div>
          
            </nav>

           {/* Jumbotron */}
            <div className="jumbotron">
              <h2 className="text-center"><strong>DivineSign Horoscope</strong></h2>
              <h3 className="text-center">Daily Horoscope And Match Making</h3>
            </div>


           {/* Here we will deploy the sub components (Search  */}
            {/* These sub-components are getting passed as this.props.children */}
            {this.props.children}
          </div>
        </div>
      );
    }
});

// Export
module.exports =  Main;