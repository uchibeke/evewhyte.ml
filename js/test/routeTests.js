describe('Testing routes', function() {
  beforeEach(module('myApp'));

  describe('Testing route', function() {
    var $scope, controller;
    var $route, $rootScope, $location, $httpBackend;

    beforeEach(function() {

      inject(function($injector){
        $route = $injector.get('$route');
        $rootScope = $injector.get('$rootScope');
        $location = $injector.get('$location');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', 'partials/home.html').respond('home');
      });
    });

    it('should navigate to home', function(){
      // navigate using $apply to safely run the $digest cycle
      $rootScope.$apply(function() {
        $location.path('/home');
      });
      expect($location.path()).toBe('/home');
      expect($route.current.templateUrl).toBe('partials/home.html');
      expect($route.current.controller).toBe('MainController');
    })

    it('should redirect not registered urls to home', function(){
      // navigate using $apply to safely run the $digest cycle
      $rootScope.$apply(function() {
        $location.path('/other');
      });
      expect($location.path()).toBe('/home');
      expect($route.current.templateUrl).toBe('partials/home.html');
      expect($route.current.controller).toBe('MainController');
    })

  });
});
