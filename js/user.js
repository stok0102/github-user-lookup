var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function (usernameInput) {
  $.get('https://api.github.com/users/' + usernameInput + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
