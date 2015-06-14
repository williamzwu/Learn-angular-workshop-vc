angular.module('myapp', []).directive('appSearchField', function () {
	return {
		restrict: 'E',
		scope: {
value: '=',
showClear: '@'
		},
		controller: function ($scope) {
			$scope.clear = function () {
				$scope.value = '';
			};
		},
		templateUrl: 'templeate/search_field.html'
	};
});

angular.module('myapp').directive('attrDirective', function () {
	return {
		link: function ( scope, element) {
			var dom = element[0];
			dom.addEventListener( 'input', function (event) {
				console.log('field is changed');
			});
		}
	};
});

angular.module('myapp').controller('AppCtrl', function ($scope) {
	$scope.searchValue = '';
});
