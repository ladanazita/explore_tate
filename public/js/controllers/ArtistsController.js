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

  ArtistsController.$inject = ['$http', '$state', '$scope', '$log'];

  function ArtistsController($http, $state, $scope, $log){
    var self = this;

    // $stateProvider.state('artists'{
    //   template: 'artists',
    //   controller: function($scope){
    //     $scope.artist= 'Artists'
    //   }
    // })

    self.listArtists = function(){
      var promise =
      $http({
        method: 'GET',
        url: '/api/v1/arts/artists'
      }).success(function(data, status, headers, config){
        $log.log('Done');
        angular.forEach(data, function(c){
          $log.log(c.artist);
        });
        artists = data;
        return artists;
    });
    return promise;
  }
}