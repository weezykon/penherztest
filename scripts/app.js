angular
.module('penApp', ['ui.router', 'ngAnimate','ngStorage'])

.run(['$localStorage','$rootScope','$location','$window',function($localStorage,$rootScope,$location,$window){
$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
	if($localStorage.token === undefined || $localStorage.user === undefined) {
		$window.location.href = "#/login";
	}
	else{
		if(toState.url == "/login"){
			$window.location.href = "#/";
		}
	}
});
    $rootScope.penherzLink = "http://localhost/penherz/index.php/";
}])

.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider,$locationProvider)
{
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl:'templates/home.html'
		// controller : 'settingsCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl:'templates/login.html',
		controller : 'loginCtrl'	
	})

	.state('register', {
		url: '/register',
		templateUrl:'templates/register.html'
		// controller : 'settingsCtrl'	
	});

	// $locationProvider.html5Mode({
 //  		enabled: true,
 //  		requireBase: false
	// });
}]);