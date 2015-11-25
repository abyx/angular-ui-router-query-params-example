'use strict';

angular.module('app', ['ui.router']).config(
function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('inbox', {
    url: '/inbox?search',
    template: '<inbox></inbox>',
    params: {
      search: {
        value: '',
        squash: true
      }
    },
    reloadOnSearch: false
  });

  $urlRouterProvider.otherwise('/inbox');
});
