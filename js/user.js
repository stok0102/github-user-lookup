var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function (usernameInput) {
  $.get('https://api.github.com/users/' + usernameInput + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.userInfo h1').text(response.name);
    $('.userInfo').append("<img class='img-responsive center-block' src='" + response.avatar_url + "'/>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
