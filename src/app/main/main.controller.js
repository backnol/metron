'use strict';

class MainCtrl {
  //@ngInject
  constructor ($scope, $http, localStorageService) {
    $scope.papers = localStorageService.get('papers') || [] ;

    $scope.refresh = function() {
      // $scope.papers.length = 0;
      $scope.loading = true;
      $http({method: 'GET', url: '/api/papers.json'}).then(function(response){
        response.data.forEach(function(paper){
          var scopePaper = $scope.papers.find(function(sPaper){
            return sPaper.id === paper.id;
          });

          if(!scopePaper){
            $scope.papers.unshift(paper);
          }
        });
        if($scope.papers.length > 50){
          $scope.papers = $scope.papers.slice(0,49);
        }
        localStorageService.set('papers', $scope.papers);
        $scope.loading = false;
      });
    };
  }
}

export default MainCtrl;
