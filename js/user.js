function User() {}

User.prototype.getUser = function (usernameInput) {
  $.get("").then(function(response) {
    console.log(response);
  }).fail(function(error) {
    alert("error");
  });
};

exports.userModule = User;
