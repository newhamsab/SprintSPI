(function () {
    'use strict';

    //Déclaration de l'application AngularJS
    angular.module(
        'app',
        ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart',
            'mgo-angular-wizard', 'textAngular', 'ui.tree',
            'ngTagsInput']).config(
        ['$routeProvider', function ($routeProvider, $urlRouterProvider) { }]
        );

    //Déclaration des routes
    angular.module('app').config(['$routeProvider',
        function ($routeProvider) {
            // Système de routage
            $routeProvider
                .when('/accueil', {
                    templateUrl: '/views/authentification.html'
                })
                .when('/formations', {
                    templateUrl: '/views/formations.html',
                    controller: 'formationCtrl'
                })
                .when('/formation/:codeFormation', {
                    templateUrl: '/views/formationDetails.html',
                    controller: 'formationCtrl'
                })
                .when('/ajouteeFormation', {
                    templateUrl: '/views/ajouteeFormation.html',
                    controller: 'formationCtrl'
                })
                 .when('/formationedit/:codeFormation', {
                    templateUrl: '/views/editFormulaire.html',
                    controller: 'editFormationCtrl'
                })
                .otherwise({
                    redirectTo: '/accueil'
                });
        }
    ]);

}).call(this);

