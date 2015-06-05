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
// angular
//   .module('TateApp')
//   .controller('ArtistsController', ArtistsController);

//   ArtistsController.$inject = ['$http','$scope'];

//   function ArtistsController($http, $scope){
//     $scope.items = [];
//     $scope.getArtists = function(){

//       $http({
//         method: 'GET',
//         url: '/api/v1/arts/artists',
//         headers: { 'X-Parse-Application-Id':'XXX', 'X-Parse-REST-API-Key':'YYY',
//       }})
//       .success(function(data, satus){
//         $scope.items = data;
//       })
//       .error(function(data, error){
//         console.log(error);
//       });
//     }


  //   var self = this;

  //   // $stateProvider.state('artists'{
  //   //   template: 'artists',
  //   //   controller: function($scope){
  //   //     $scope.artist= 'Artists'
  //   //   }
  //   // })

  //   self.listArtists = function(){
  //     var promise =
  //     $http({
  //       method: 'GET',
  //       url: '/api/v1/arts/artists'
  //     }).success(function(data, status, headers, config){
  //       $log.log('Done');
  //       angular.forEach(data, function(c){
  //         $log.log(c.artist);
  //       });
  //       artists = data;
  //       return artists;
  //   });
  //   return promise;
  // }
}