module.exports = function($stateProvider) {
    $stateProvider
        .state('index', {
          url: "/",
          templateUrl: "components/view.index.html",
          controller: 'TestController'
    });
}
