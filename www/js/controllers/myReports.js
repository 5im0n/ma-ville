'use strict';

/** My reports controller
 */
app.controller('MyReportsCtrl', ['$scope', function($scope) {

  var sample = [
    { id: 1, name: 'The name', description: 'The lorem ipsuem est une tres longue phrase', img: 'img/presentation/1.png'},
    { id: 2, name: 'The name', description: 'The description', img: 'img/presentation/1.png'},
    { id: 3, name: 'The name', description: 'The description', img: 'img/presentation/2.png'},
    { id: 4, name: 'The name', description: 'The description', img: 'img/presentation/3.png'},
    { id: 5, name: 'The name', description: 'The description', img: 'img/presentation/2.png'},
    { id: 6, name: 'The name', description: 'The description', img: 'img/presentation/1.png'},
    { id: 7, name: 'The name', description: 'The description', img: 'img/presentation/3.png'},
    { id: 8, name: 'The name', description: 'The description', img: 'img/presentation/1.png'},
    { id: 9, name: 'The name', description: 'The description', img: 'img/presentation/2.png'},
    { id: 10, name: 'The name', description: 'The description', img: 'img/presentation/1.png'},
    { id: 11, name: 'The name', description: 'The description', img: 'img/presentation/3.png'}
  ];

  $scope.reports = sample;

}]);
