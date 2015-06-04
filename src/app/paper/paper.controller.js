'use strict';

class PaperCtrl {
  //@ngInject
  constructor ($scope, $stateParams, localStorageService) {
    $scope.paper =
      localStorageService.get('papers').find(function(paper){
        return paper.id === Number($stateParams.id)
      });
  }
}

export default PaperCtrl;
