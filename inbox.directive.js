'use strict';

angular.module('app').directive('inbox', function() {
  return {
    templateUrl: 'inbox.directive.html',
    scope: {},
    bindToController: true,
    controllerAs: 'inbox',
    controller: function($state, $scope) {
      console.log('controller load'); // Should only happen once

      var vm = this;
      vm.searchText = $state.params.search;

      vm.searchTextChanged = function() {
        $state.go('.', {search: vm.searchText}, {notify: false});
      };

      $scope.$on('$locationChangeSuccess', function() {
        vm.searchText = $state.params.search;
      });

      vm.items = [
        {text: 'Alice'},
        {text: 'Bob'},
        {text: 'Charlie'},
        {text: 'David'},
        {text: 'Eve'},
        {text: 'Frank'},
        {text: 'George'},
        {text: 'Howard'},
        {text: 'Ian'},
        {text: 'Jack'}
      ];
    }
  };
});
