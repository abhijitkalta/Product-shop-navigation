var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../reflux/actions');
var EmailStore = require('../../reflux/EmailStore');
var EmailField = require('./EmailField');
var NameField = require('./NameField');

var LeadCapture = React.createClass({
  mixins:[Reflux.listenTo(EmailStore, 'onChange')],

  getInitialState: function(){
    return {submitted: false};
  },
  handleSubmit: function(){
      if(!this.refs.fieldEmail.state.valid){
        alert("error");
      } else{
        var subscriber = {
          email: this.refs.fieldEmail.state.value,
          firstName: this.refs.fieldName.state.value
        };
        this.refs.fieldEmail.clear();
        this.refs.fieldName.clear();

        Actions.submitEmail(subscriber);
      }
  },

  onChange: function(msg){
    this.setState({submitted: true});
  },

  render: function(){
    var successStyle = {
      color: "green",
      visibility: this.state.submitted ? "visible" : "hidden"
    };
     return(
       <div >
         <div className="panel panel-default">
         <div className="panel-heading">
           <h4>Free E-books</h4>
         </div>
           <div className="panel-body">
              <NameField type="First" ref="fieldName"/>
              <EmailField ref="fieldEmail"/>
              <div className="row">
                <div className="col-sm-6">
                  <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className="col-sm-2">
                  <h5 style={successStyle} >Success!</h5>
                </div>
              </div>

           </div>
         </div>
       </div>
     );
  }
});

module.exports = LeadCapture;
