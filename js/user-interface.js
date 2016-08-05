var User = require('./../js/user.js').userModule;

$(document).ready(function () {
  $('#getUser').click(function () {
    var usernameInput = $('#nameSearch').val();
    newUser = new UserSearch();
    debugger;
    newUser.getUser(usernameInput);
  });
});
