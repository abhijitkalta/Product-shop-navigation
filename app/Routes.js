var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = require('react-router/lib/browserHistory');

//to remove hostroy hash - not recommended for older browsers
var CreateHistory = require('react-router/node_modules/history/lib/createHashHistory.js');
var History = new CreateHistory({
  queryKey: false
});

var BasePage = require('./components/BasePage.js');
var HomePage = require('../app/components/HomePage.js');
var ProductPage = require('../app/components/ProductPage.js');

var Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path="/product/:productId" component={ProductPage} />
    </Route>
  </Router>
);

module.exports = Routes;
