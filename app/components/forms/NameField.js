var React = require('react');


var NameField = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    }
  },

  clear: function(){
    this.setState({
      value: ''
    });
  },

  handleChange: function(e){
    this.setState({
        value: e.target.value
      });
  },

  render: function(){
     return(
       <div className="form-group">
         <input className="form-control" onChange={this.handleChange} placeholder={this.props.type + "Name"} value={this.state.value} />
       </div>
     );
  }
});

module.exports = NameField;
