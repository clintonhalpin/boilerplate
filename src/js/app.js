'use strict';

require('./../bower_components/angular/angular.min.js');
require('./../bower_components/angular-ui-router/release/angular-ui-router.min.js');

var app = angular.module('app', [
    'ui.router'
])

app.controller('TestController', [ '$scope', require('./routes') ])
// app.config(require('./routes.js'));

//app.controller('mainCtrl', [ require('../components/ctrl.mainCtrl.js') ])
