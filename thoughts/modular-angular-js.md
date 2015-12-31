---
slug: modular-angular-js
title: Modular Angular.js
date: 02/16/2014
---

Structuring a front end application is seamless when following an MVC pattern such an Angular's. But there's even a way, such as with backbone, to namespace your applications so that they're clear, concise, and meanwhile preventing a cluttered global scope.

## Declare Your Application

```javascript
F1 = angular.module('F1', [
  'F1.controllers',
  'F1.services',
  'ngRoute',
])
```

What we first do is declare a variable, F1 which will be our namespace. We also name our module the same name as our variable for internal angular namespacing. Within this module, we pass an array containing 3 dependencies of our main application module. Each dependency aside from ngRoute is a property of our application variable, F1.

## The API

```javascript
F1.api.factory('API', function($http) {
  var API = {};

  API.getDrivers       = function() {
    return $http.get('http://ergast.com/api/f1/2014/driverStandings.json');
  };

  API.getDriverDetails = function(id) {
    return $http.get('http://ergast.com/api/f1/2014/drivers/'+ id +'/driverStandings.json?');
  };

  API.getDriverRaces   = function(id) {
    return $http.get('http://ergast.com/api/f1/2014/drivers/'+ id +'/results.json?');
  };

  return API;

});
```

Here we declare a property of F1 called api that we will set to an angular factory. We call the factory API since it's an interface for the free, public, and key-less API, Ergast. An API which provides a multitude of F1 racing information in XML or JSON.

This factory accepts the $http service which angular facilitates communication with JavaScript's XMLHttpRequest and JSONP. We will utilize this factory to return a static class which will in turn interface with Ergast's API.

Our first method getDrivers will get a collection of drivers from the 2014 season and their respective statistics.

Our second method getDriverDetails will get an object of details related to a driver's ID number.

Our third method getDriverRaces will get a collection of races of a driver by a driver's ID number.

## The Controllers

For our controllers we have one for all drivers and one for a single driver. We'll start with the drivers controller.

## Drivers:

```javascript
F1.controllers.controller('driversController', function($scope, API) {
  $scope.nameFilter   = null;
  $scope.drivers      = [];
  $scope.searchFilter = function(driver) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
  };

  API.getDrivers().success(function(data) {
    $scope.drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});
```

For our drivers, we will create a property called controllers which will then have an angular controller added to it using the method. This, like most angular patterns accepts a name and a function which will contain the controller's logic. For the name, we go with a conventional name, driversController. For the function, we pass $scope and our API factory. $scope is a local object to each individual controller which we can dump all relevant data into.

Inside our controller, we declare a few variables. nameFilter, drivers, and searchFilter.

The nameFilter will be an angular model that we will use to filter driver's names.

drivers will be the object of drivers from the API call.

To utilize our nameFilter model, we declare the function searchFilter which will check the nameFilter model against a regular rexpression using the driver's first and last name.

Finally we utilize our API factory's method getDrivers. Upon success of the ajax call, we access the driver's collection within the data received and set it to our $scope property drivers.

## Driver:

```javascript
F1.controllers.controller('driverController', function($scope, $routeParams, API) {
  $scope.id     = $routeParams.id;
  $scope.races  = [];
  $scope.driver = null;

  API.getDriverDetails($scope.id).success(function(data) {
    $scope.driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  });

  API.getDriverRaces($scope.id).success(function(data) {
    $scope.races  = data.MRData.RaceTable.Races;
  });
});
```

For our last custom dependency, we have our driverController. This controller has three local $scope properties, id, races, and driver. The function accepts $scope, $routeParams from our ngRoute dependency, and our API factory.

We utilize the angular router to grab the url parameter, id and set it to id.

For races we declare an empty array which will accept a collection of races from the API.

Our driver is set to null and eventually set using our API factory.

The first factory method, getDriverDetails, has the id from the url passed to it. Upon success we set the driver property to the data within the returned object.

The second and last factory method, getDriverRaces, also accepts the route parameter id and upon success populates races with the races within the returned data.

As you can see, angular is quite easy as it uses great JavaScript methodologies of factories, modules, and dependency injection. Not only is it easy and built well, we can utilize the JavaScript that we already know to organize our modules into a readable and structured applications. You can always check out the sample app on github.
