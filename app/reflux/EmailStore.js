var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.js');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber){
    HTTP.post('/subscribers', subscriber)
    .then(function(response){
      var msg = "";
      if(response.status === 200){
        msg = "Submitted";
      }else {
        msg="Failed";
      }

      this.trigger(msg);
    }.bind(this));
  }
});

module.exports = EmailStore;
