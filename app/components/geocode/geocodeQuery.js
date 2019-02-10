var React= require("react");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		return{
			place : "Enter Your Birth Place",
			DOB:"",
			day: "DD",
			month: "MM"
		};
	},

	handleChange: function(event) {
		var newState={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
    //handleSumbit function
	handleSubmit : function(event) {
		event.preventDefault();
		this.props.updateSearch(this.state.place, this.state.DOB,this.state.day,this.state.month);
	},
	// render the query
	render: function() {
		return (
			
				<div className= "col-md-4">  
                    <div className= "panel-body">
             
				<form onSubmit={this.handleSubmit}>
				 	<div className="form-group">
				 		<h4 className=""><strong>Place of Birth</strong></h4>
				 		<h4 className=""><strong>City</strong></h4>
						 		<input
						 		 type="text"
						 		 value={this.state.place}
					 		 className="form-control"
						 		 id="place"
						 		 onChange={this.handleChange}
						 		 required/>

				 		<h4 className=""><strong>Day of Birth</strong></h4>
						 		<input
						 		 type="text"
						 		 value={this.state.day}
					 		 className="form-control"
						 		 id="day"
						 		 onChange={this.handleChange}
						 		 required/>
						 		 
				 		<h4 className=""><strong>Month of Birth</strong></h4>
						 		<input
						 		 type="text"
						 		 value={this.state.month}
					 		  className="form-control"
						 		 id="month"
						 		 onChange={this.handleChange}
						 		 required/>
					 	
					 	<button className="btn btn-submit reactBtn" type="submit" id="button">Get GEO data  </button>
					 </div>
					</form>
			      </div>
			    </div>
			
			  
			)
	}

})
module.exports= Query;