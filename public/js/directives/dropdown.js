angular
  .module('TateApp')
  .directive('bnDropdown', function($compile){
    return({
      require: ngModel,
      compile: compile,
      templateUrl: "artists.html",
      restrict: "A",
      terminal: true
    });
  });