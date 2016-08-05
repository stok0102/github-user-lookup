var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function (usernameInput) {
  $.get('https://api.github.com/users/' + usernameInput + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.userInfo img').remove();
    $('.userInfo h1').text(response.name);
    $('#userTitle').append("<img src='" + response.avatar_url + "'/>");
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
      language = repo.language;
      if (language === 'HTML') {
        language = 'html5';
      } else if (language === 'CSS') {
        language = 'css3'
      } else if (language) {
          language = language.toLowerCase();
      };
      console.log(language);
      htmlUrl = repo.html_url;
      $('.userInfo ul').append("<li class='repoLi'><a href=" + htmlUrl + ">" + name + " </a><i class='devicon-" + language + "-plain colored'></i></li>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
