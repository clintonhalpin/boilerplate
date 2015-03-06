module.exports = function($scope, TestService) {
    $scope.message = TestService.get(); 
}
