'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './test.routes';

export class TestComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('fullstackAngularApp.test', [uiRouter])
  .config(routes)
  .component('test', {
    template: require('./test.html'),
    controller: TestComponent,
    controllerAs: 'testCtrl'
  })
  .name;
