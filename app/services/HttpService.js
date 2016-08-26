var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6999';

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then((response) => response.json())
        .then((responseJson) => {
          console.log("Data: ",responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  },

  post: function(url, body){
     return fetch(baseUrl + url , {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(function(response){
        return response;
      });
  }
} ;

module.exports = service;
