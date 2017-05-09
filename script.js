console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('ourFirstController', function(){
  // view model
  var vm = this;

  vm.thingOne = 'HEY Millie, Dev, and Huck!';
  vm.thingTwo = 'Here is ANOTHER ONE!!!- DJ Khaled';

  vm.name = '';
});// end myApp.controller
