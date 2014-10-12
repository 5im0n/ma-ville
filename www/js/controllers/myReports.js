'use strict';

/** My reports controller
 */
app.controller('MyReportsCtrl', ['$scope', function($scope) {

  var sample = [
    { id: 1, name: 'The name', description: 'The lorem ipsuem est une tres longue phrase', img: 'img/presentation/blue.png' },
    { id: 2, name: 'The name', description: 'The description', img: 'img/logos/blue.png' },
    { id: 3, name: 'The name', description: 'The description', img: 'img/logos/green.png' },
    { id: 4, name: 'The name', description: 'The description', img: 'img/logos/yellow.png' },
    { id: 5, name: 'The name', description: 'The description', img: 'img/logos/green.png' },
    { id: 6, name: 'The name', description: 'The description', img: 'img/logos/blue.png' },
    { id: 7, name: 'The name', description: 'The description', img: 'img/logos/yellow.png' },
    { id: 8, name: 'The name', description: 'The description', img: 'img/logos/blue.png' },
    { id: 9, name: 'The name', description: 'The description', img: 'img/logos/green.png' },
    { id: 10, name: 'The name', description: 'The description', img: 'img/logos/blue.png' },
    { id: 11, name: 'The name', description: 'The description', img: 'img/logos/yellow.png' }
  ];

  $scope.reports = sample;

}]);
