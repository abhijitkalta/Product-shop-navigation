var React = require('react');
var NavItem = require('./NavItem');

var NavBar = React.createClass({
  render: function(){
    var styles = {
      WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
      MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
      boxShadow: "0 0 4px rgba(0,0,0,0.4)",
      borderRadius: 20
    };

    var titleStyle = {};
    var linkStyle = {};

    if(this.props.bgColor)
     styles.background = this.props.bgColor;

     if(this.props.titleColor)
      titleStyle.color = this.props.titleColor;

      if(this.props.linkColor)
       linkStyle.color = this.props.linkColor;

    var createLinkItem = function(item, index){
      return <NavItem aStyle={linkStyle} key={item.title + index} href={item.ref} title={item.title} />
    };

    return(
      <div>
        <nav style={styles} className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a style={titleStyle} className="navbar-brand" href="#">Product Shop</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
