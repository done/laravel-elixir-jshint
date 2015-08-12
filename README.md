# laravel-elixir-jshint
Elixir Gulp wrapper for JSHint based on ponko2/laravel-elixir-jshint, but modified for the Elixir version that comes with Laravel 5.1.

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
