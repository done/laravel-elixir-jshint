# laravel-elixir-jshint
Elixir Gulp wrapper for JSHint

## Usage
Install the package as a development dependency:

```sh
$ npm install [TODO: Package name] --save-dev
````

Create a jshint options file
```sh
$ .jshintrc
````

Add it to your gulpfile.js:

```javascript
require('laravel-elixir-jshint');
	
elixir(function(mix) {
	mix.jshint(['resources/scripts/**/*.js']);
});
```

## API
