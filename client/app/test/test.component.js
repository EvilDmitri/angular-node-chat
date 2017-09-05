'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './test.routes';


export class TestComponent {
  /*@ngInject*/
  $http;
  socket;
  messages = [];
  newMessage = 'gggggg';

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('message');
    });
  }

  $onInit() {
    this.$http.get('/api/messages')
      .then(responce => {
        console.log(responce.data);
        this.messages = responce.data;
        this.socket.syncUpdates('message', this.messages);
      });
  }

  addMessage() {
    console.log('Try to add the message');
    if(this.newMessage) {
      this.$http.post('/api/messages', {
        author: 'user',
        text: this.newMessage
      });
      this.newMessage = '';
    }
  }

}

export default angular.module('fullstackAngularApp.test', [uiRouter])
  .config(routes)
  .component('test', {
    template: require('./test.html'),
    controller: TestComponent
    // ,
    // controllerAs: 'testCtrl'
  })
  .name;
