// Include React
var React = require("react");
var Router=require('react-router');
var helpers = require('../../utils/helpers');

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
    getInitialState:function(){
            return{ arrayofArticles:[] };
    },

    handleClick: function(item){
    },

    // A helper method for mapping through our articles and outputting some HTML
    renderArticles: function() {
   
     // Each article thus reperesents a list group item with a known index
      return (
        <div key="55">
          <li className="list-group-item">
            <h3>
              <span>
                {/*<em>{this.props.results.docs.description}</em> */}
                <em>{this.props.results.docs.conclusion.match_report}</em>
              </span>
            </h3>
            <p>ashtakoota: {this.props.results.docs.ashtakoota.received_points}</p>
            <p>manglik male points: {this.props.results.docs.manglik.male_percentage}</p>
            <p>manglik female points: {this.props.results.docs.manglik.female_percentage}</p>
          </li>
       </div>
      );
 },

  // A helper method for rendering a container to hold all of our articles
  renderContainer: function() {
    return (
      <div className="main-container">
       
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
      </div>
    );
  },
      
  render: function() {
    if(!this.props.results.docs){
          return(
            <div className="main-container">
               <div className="col-lg-12">
                <div className="panel panel-primery">
                  <div className="panel-heading">
                      <h1 className= "panel-title"> <strong> <span className="glyphicon glyphicon-list.alt" aria-hidden="true"></span>Results</strong>
                       </h1>
                  </div>
                  <div className="panel-body">
                                        <h3>

                            <span className="text-center"><em></em></span>

                      </h3>
                     </div>       
                   </div>
                </div>
        </div>
          );
        }
      
      return this.renderContainer();
     }
});   
// Export the component back for use in other files
module.exports = Results;
