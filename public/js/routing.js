(function(){
  angular
    .module('TateApp')
    .config(config);

    function config($stateProvider, $urlRouterProvider){
     $stateProvider
      .state('home',{
        url: "/",
        title: "Explore Tate",
        templateUrl: "views/index.html",
        controller: 'ArtistsController',
        controllerAs: 'artists'
      })
      .state('artists',{
        url: '/artists',
        title: "Search by Artist",
        templateUrl: 'templates/artists.html',
        controller: 'ArtistsController',
        controllerAs: 'artists'
      })
      .state('artworks',{
        url: '/artists/artworks',
        templateUrl: 'templates/artworks.html',
        controller: 'ArtworkController',
        controllerAs: 'artworks'
      });
      $urlRouterProvider.otherwise('/');
    }

})();