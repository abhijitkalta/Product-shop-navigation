var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('../nav/NavBar');

var App = React.createClass({
  navLinks : [
    {
      title: "Home",
      href: "#"
    },
    {
      title: "Courses",
      href: "#"
    },
    {
      title: "Blogs",
      href: "#"
    }
  ],

  render : function(){
    return <NavBar bgColor="#FFF" titleColor="#3097d1"  navData={this.navLinks} /> ;
  }
});

module.exports = App ;
