var app = angular.module('SrApp', [
    'SrAppControllers',
    'SrAppServices',
    'SrAppFilters',
    'SrAppDirectives',
    /*'ngRoute'*/
]);

/** Routes **
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when("/ROUTE_URL", {
            templateUrl: "TEMPLATE_URL", 
            controller: "ROUTE_CONTROLLER"
        }).
        when("/ROUTE_URL/:ITEM_ID", {
            templateUrl: "TEMPLATE_URL", 
            controller: "ROUTE_CONTROLLER"
        }).
        otherwise({
            redirectTo: '/DEFAULT_URL'
        });
    }
]);
*/