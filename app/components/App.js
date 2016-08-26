var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./nav/NavBar');
var Routes = require('../Routes.js');

var App = React.createClass({

  render : function(){
    return Routes ;
  }
});

module.exports = App ;
