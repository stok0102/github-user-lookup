# _Github User Lookup_ :octocat:

##### This application pulls data from the Github API and displays a list of links to a user's Github repos.

## Using

 Node, npm, Bower, Gulp, SASS<br>

Working with this repo
------------
Fork the repository at: https://github.com/stok0102/github-user-lookup

Build gulp dependencies:
```
$ npm install
```

Build Bower dependencies:
```
$ bower install
```

Get an API key from Github. Save the key in a file called .env on the root level of your repo with the format
```
exports.apiKey = "YourAPIkey"
```

Build your development server with your gulp asset pipeline
```
$ gulp build
```

Start your server:
```
$ gulp serve
```
If the task runs without errors, the page will open in a browser window.

License
-------

MIT License. Copyright &copy; 2016 "Caleb Stokka"
