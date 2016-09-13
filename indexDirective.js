angular.module("scoreCard").directive("indexDirective", function() {
    return {
      restrict: "E",
      templateUrl: "./holeTmpl.html",
      scope: {
      nextHole: '&',
      getHoleNumber: '&'
    },
      controller: function($scope, service){
        $scope.getHoleNumber();
        $scope.hole = service.nextHole();

      }

      }
    });
