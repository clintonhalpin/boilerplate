'use strict';

require('./../bower_components/angular/angular.min.js');
require('./../bower_components/angular-ui-router/release/angular-ui-router.min.js');

angular.module('app', [
    'ui.router'
])

.config(["$urlRouterProvider", "$stateProvider", require('./routes') ])

.controller('TestController', [ '$scope', require('./../components/ctrl.mainCtrl.js') ])

// Hold on to your butts, start things up 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});

