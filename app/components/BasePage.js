var React = require('react');
var NavBar = require('./nav/NavBar.js');
var Leadcapture = require('./forms/Leadcapture');

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

    var styles= {
      paddingTop: 20
    };

    return(
      <div>
        <NavBar style={styles} bgColor="#FFF" titleColor="#3097d1"  navData={this.navLinks} />
         <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.props.children}
            </div>
            <div className="col-sm-3">
              <Leadcapture />
            </div>
          </div>

         </div>
      </div>
    );
  }
})

module.exports = BasePage;
