angular.module('myapp', ['ui.router']).config(function ($stateProvider) {
	$stateProvider.state( 'users', {
		url: '/users',
		controler: 'urlistctrl',
		templateurl: 'partials/list.html'
	}).state('user', {
		url: "/user/:userId",
		templateUrl: "partials/user.html",
		controller: 'UserCtrl'
		}).state('user.comments', {
			url: "/comments",
			templateUrl: "partials/comments.html"
			});	
});
