angular
  .module('TateApp')
  .directive('bnDropdown', function($compile){
    return({
      compile: compile,
      priority: 2,
      restrict: "A",
      terminal: true
    });
  });