var React = require('react');
var NavBar = require('./nav/NavBar.js');

var BasePage = React.createClass({
  navLinks : [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Ios Course",
      href: "/product/55"
    },
    {
      title: "React Course",
      href: "/product/67"
    }
  ],

  render: function(){
    return(
      <div>
        <NavBar bgColor="#FFF" titleColor="#3097d1"  navData={this.navLinks} />
        {this.props.children}
      </div>
    );
  }
})

module.exports = BasePage;
