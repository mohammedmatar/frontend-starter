import { getView }       from '../shared/helpers/route.helper';


export default function ( $stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: getView('home'),
      controller:  'HomePageController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
