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
            <h4>
              <span>
                <em>Your Sign, Latitude, Longitude</em> 
               </span>
            </h4>
            <p> Your Sign: {this.props.results.docs.sign}</p>
            <p> Latitude: {this.props.results.docs.lat}</p>
            <p> Longitude: {this.props.results.docs.lng}</p>
            <p> Time Zone: {this.props.results.docs.TZ}</p>
         </li>
       </div>
      );
 },

  // A helper method for rendering a container to hold all of our articles
  
  renderContainer: function() {

    return (
     
          <div className="col-md-4">
            <div className="panel panel-primary">
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

         return (
               <div className="col-md-4">

             </div>
          );
        }

      return this.renderContainer();
     }
});   
// Export the component back for use in other files
module.exports = Results;
