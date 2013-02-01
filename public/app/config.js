// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    backstretch: "../assets/js/libs/backstretch"
  },

  shim: {
    // Backbone library depends on underscore and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    backstretch : {
      deps : ["jquery"],
      exports : "Backstretch"
    }

  }

});