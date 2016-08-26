var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function(){
    return {
      valid: true,
      value: ''
    }
  },

  clear: function(){
    this.setState({
      valid: true,
      value: ''
    });
  },

  handleChange: function(e){
    var val = e.target.value;
    if(!validator.validate(val)){
      this.setState({
        valid: false,
        value: e.target.value
      });
    }else{
      this.setState({
        valid: true,
        value: e.target.value
      });
    }
  },

  render: function(){
    var formClass = this.state.valid ? "form-group" : "form-group has-error" ;
     return(
       <div className={formClass}>
         <input className="form-control" onChange={this.handleChange} placeholder="Email" value={this.state.value} />
       </div>
     );
  }
});

module.exports = EmailField;
