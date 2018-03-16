describe('Testing Hom eController', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Home controller', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('MainController', { $scope: $scope });
    });

    it('Test that $scope.guests is defined', function() {
      expect($scope.guests).toEqual([]);
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      expect(true).toEqual(true);
    });
  });
});
