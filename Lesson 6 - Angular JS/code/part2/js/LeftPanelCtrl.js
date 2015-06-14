angular.module('myapp').controller('LeftPanelCtrl', function ($scope, $http, $rootScope) {
/** */
	$scope.elements = [
		{
			"name": "Lorem ipsum",
			"active": true,
			"id": 123
		},
		{
			"name": "Aenean lacus dui",
			"active": true,
			"id": 456
		},
		{
			"name": "Tincidunt tempus",
			"active": false,
			"id": 144
		}		
	];
/**/
	$scope.elements = [];
	$http.get('data.json').success(function (data) {
		$scope.elements = data; // asynchronized
	});
		
	$scope.onElementClick = function (element) {
		// propagate
		console.log( element.name );
		$rootScope.$broadcast('elementclick', element);
	}
});
