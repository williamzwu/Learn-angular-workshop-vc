angular.module('myapp').controller('RightPanelCtrl', function ($scope) {
	$scope.$on('elementclick', function (event, element) {
		$scope.element = element;
	})
});
