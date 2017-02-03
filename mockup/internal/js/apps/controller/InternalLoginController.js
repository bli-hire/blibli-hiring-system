angular
.module('InternalApp')
.controller('InternalLoginController',function($scope , $localStorage, $sessionStorage){
	
	$scope.storage = $localStorage.$default({
    	localEmail : "",
    	localPassword : "",
    });

	$scope.email = $sessionStorage;
	$scope.password = $sessionStorage;

	$scope.saveToSessionStorage = function(){
    	$scope.email = $scope.storage.localEmail;
    	$scope.password = $scope.storage.localPassword;
    }

	$scope.login = function(){
		$scope.saveToSessionStorage();
		$scope.storage.$reset({
			localEmail : "",
			localPassword : "",
    		tab : 1,
		});
	};

});