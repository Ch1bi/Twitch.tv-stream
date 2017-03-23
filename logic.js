var myApp = angular.module("twitch-app", []);

myApp.controller("myController", function($scope, $http, $log){

$http({

method:"GET",
headers:{"Access-Control-Allow-Origin"},
url: "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?"

}).then(function(response){

    $log.info(response);
})
});