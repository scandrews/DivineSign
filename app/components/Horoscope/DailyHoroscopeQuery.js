
var React = require("react");
var helpers = require("../../utils/helpers.js");
// query component
var Query=React.createClass({
//set the intial components
	
	getInitialState: function() {
		helpers.getCurrentUser().then(function(currentUser){
			this.setState({sign: currentUser.data.sign_1});
		}.bind(this));

			return{
				period:"today",
				sign: "Enter Your Sign",
			};
	},
				 
	
	handleChange: function(event) {
		var newState={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	

	handleSubmit : function(event) {
		event.preventDefault();
		this.props.updateSearch(this.state.sign, this.state.period);
	},
	

	// render the query
	render: function() {
		return(
			<div className= "col-md-4">
				 <div className="panel-body">
				 {/* association of text box input with state values*/}
				
				<form onSubmit={this.handleSubmit}>
				 	<div className="form-group">

				 		<h4 className=""><strong>Your Sign</strong></h4>

					 			<input
								type="text"
					 		    value={this.state.sign}
					 		 className="form-control"
					 			 id="sign"
					 			 onChange={this.handleChange}
					 			 required/>

					 	
					 	<h4><strong>For (Today/Tomorrow)</strong></h4>
							 	<input 
							 	type="text"
							 	value={this.state.period}
						 	className="form-control"
							 	id="period"
							 	onChange={this.handleChange}
							 	required/>

					 	<button className="btn btn-submit" type="submit" id="button">Show Horoscope  </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

