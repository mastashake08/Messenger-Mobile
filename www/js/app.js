// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('real-time-messaging', ['ionic','services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('HomeController',function($scope,WebSocket){
  $scope.socket = WebSocket;
  console.log($scope.socket);
  $scope.messageModel = {};
  $scope.sendMessage = function(){
    console.log('SEND MESSAGE PUSHED!');
    console.log('Message Sent ' + $scope.messageModel.message);
    $scope.socket.send($scope.messageModel.message);
    console.log($scope.socket.messages);
  };
});
