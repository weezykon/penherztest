angular
.module('penApp')
.controller('loginCtrl',['$scope','$http','$rootScope', '$state', '$window', '$localStorage','$location',function($scope,$http,$rootScope, $state, $window, $localStorage,$location){
	// $scope.loginuser = function(userdata){
	// 	var userdatas = "username=" + userdata.username + " & password=" + userdata.password;
	// 	userdata.username="";
	// 	userdata.password="";
	// 	$http({
	// 		method : "POST",
	// 		url: $rootScope.penherzLink + "login",
	// 		data: userdatas,
	// 		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	// 	}).then(function(result) {
	// 		    if (result.data.error == false) {
	// 		    	$localStorage.token = result.data.token;
	// 		    	$scope.usertoken = "token=" + $localStorage.token + "& username=" + result.data.username;
	// 		    	$http({
	// 		    		method: "POST",
	// 		    		url: $rootScope.penherzLink + "profile",
	// 		    		data: $scope.usertoken,
	// 		    		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	// 		    	})
	// 		    	.then(function(result) {
	// 		          // console.log(result);
	// 		          $localStorage.user = result.data.data;
	// 		          $window.location.href = "#/";
	// 		          // $location.path("");
	// 		      }, function(error){

	// 		      	console.log(error);
	// 		      });
	// 		    }else{
	// 		    	console.log(result.data.description);
	// 		    }
	// 		    console.log(result);
	// 		}, function(error) {
	// 			console.log(error);
	// 		});
	// 	userdata = "";
	// 	delete userdata;
	// }

	$scope.loginuser = function(userdata){
		var userdatas = "username=" + userdata.username + " & password=" + userdata.password;
		userdata.username="";
		userdata.password="";
		$localStorage.token = '6434h764873839hj3648382' // Token sample
		$localStorage.user = userdatas;
      	$window.location.href = "#/";
	}
}])
;