// (function(){
//   angular
//     .module("TateApp")
//     .controller("ArtistsController", ['$scope', '$http', function($scope, $http){
//       console.log('controller loaded');
//       $scope.artists = [];

//       $http.get('/api/v1/arts/artists')
//         .then(function(result){
//           $scope.artist = result.data;
//         });
//     }]);



// });
angular
  .module('TateApp')
  .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['$scope', '$http'];

  function ArtistsController($scope, $http) {
      $http.get('/api/v1/arts/artists')
        .then(function(result){
          $scope.artist = result.data;
        });
  }