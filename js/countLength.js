


var CountLengthModule = angular.module("CountLengthModule", []);
CountLengthModule.controller("CountLengthCtrl", function($scope) {
	$scope.p1 = "aaa";


	$scope.dataList = [];
	$scope.totalLength = 0;
	$scope.totalUnit = 0;


	$scope.addItem = function(){
		console.log("Length"+$scope.Length);
		console.log("Quantity"+$scope.Quantity);

		// save data
		$scope.dataList.push({Length:$scope.Length,Quantity:$scope.Quantity});
		$scope.totalLength = $scope.totalLength + ($scope.Length*$scope.Quantity);
		$scope.totalUnit = $scope.totalLength / 6400;

		//clear input data 
		$scope.Length = null;
		$scope.Quantity = null;
		console.log("======"); 
	}
 
});
 
 



App = angular.module("App", ["CountLengthModule","ngSanitize"]);

