/**Creates a module named myModule and assigning it to a variable and inject iScrollModule*/
var myModule = angular.module('myModule',['myScrollModule']);

/**Providing configuration details to  myModule*/
/**Like if '/phones' url comes where to navigate and which controller needs to be binded etc*/
myModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/phones', {templateUrl: 'pages/phoneList.html', controller: phoneBrowserCntrl}).
		otherwise({redirectTo: '/phones'});

}]);