// Include React
var React = require("react");
var Router=require('react-router');
var helpers = require('../../utils/helpers');

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  getInitialState:function(){
            return null;
  },
  
 
  // A helper method for mapping through our articles and outputting some HTML
  renderHoroscope: function() {
     // Each article thus reperesents a list group item with a known index
      return (
        <div key="55">
          <li className="list-group-item">
            <h3>
              <span>
                <em>{this.props.results.docs.data.description}</em> 
               </span>
            </h3>
            <p>Date Published: {this.props.results.docs.data.current_date}</p>
            <p> Color: {this.props.results.docs.data.color}</p>
            <p> Compatibility: {this.props.results.docs.data.compatibility}</p>
            <p> Date range: {this.props.results.docs.data.date_range}</p>
            <p> Lucky number: {this.props.results.docs.data.lucky_number}</p>
            <p> Lucky time: {this.props.results.docs.data.lucky_time}</p>
            <p> Mood: {this.props.results.docs.data.mood}</p>
         </li>
       </div>
      );
  },


  // A helper method for rendering a container to hold all of our articles
  renderContainer: function() {
    return (
      // <div className="main-container">
      //   <div className="row">
          <div className="col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Daily horoscope for {this.props.results.docs.data.username}
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderHoroscope()}
                </ul>
              </div>
            </div>
          </div>
  
      
    );
  },
      
  render: function() {
    if(!this.props.results.docs){
          return(
            // <div className="main-container">
            //   <div className = "row">
             <div className="col-md-8">
                <div className="panel panel-primery">
                  <div className="panel-heading">
                      <h1 className= "panel-title"> <strong> <span className="glyphicon glyphicon-list.alt" aria-hidden="true"></span>Your Horoscope</strong>
                       </h1>
                 </div>
                  <div className="panel-body resultsPanel">
                      <h3>
                            <span className="text-center"><em className="noResults">No Results yet</em></span>
                      </h3>
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
