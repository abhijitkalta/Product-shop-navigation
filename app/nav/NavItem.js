var React = require('react');

var NavItem = React.createClass({
  getInitialState: function(){
    return {hover: false};
  },
  handleMouseOver: function(e){
    this.setState({hover: true});
  },
  handleMouseOut: function(e){
    this.setState({hover: false});
  },

  render: function(){
    return (
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
       <a style={this.props.aStyle} href={this.props.href}>{this.props.title}</a>
      </li>
    );
  }
});

module.exports = NavItem ;
