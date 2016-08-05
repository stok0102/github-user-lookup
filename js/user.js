var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function (usernameInput) {
  $.get('https://api.github.com/users/' + usernameInput + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.userInfo img').remove();
    $('.userInfo h1').text(response.name);
    $('.userInfo').prepend("<img class='img-responsive center-block' src='" + response.avatar_url + "'/>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getRepos = function (usernameInput) {
  $.get('https://api.github.com/users/' + usernameInput + '/repos?access_token=' + apiKey + '&per_page=100').then(function(response){
    console.log(response);
    var name, language, htmlUrl;
    $('.userInfo ul').text('');
    response.forEach(function(repo){
      name = repo.name;
      language = repo.language.toLowerCase();
      htmlUrl = repo.html_url;
      $('.userInfo ul').append("<li><a href=" + htmlUrl + ">" + name + "  </a><i class='devicon-" + language + "-plain colored'></i></li>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
