angular
.module('InternalApp')
.controller('InternalHomeController',function($scope){
	$scope.tab = 1;

    this.selectTab = function(tab) {
        $scope.tab = tab;
    }

    this.isSelected = function(tab) {
        return $scope.tab === tab;
    }
});