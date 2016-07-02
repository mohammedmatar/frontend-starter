/**
* @ngdoc overview
* @name controllers
* @description
* ## frontend.controllers
* _______________________
* angular controllers
*/

import { HomePageController } from '../pages/home/home.controller';

export default angular.module('frontend.controllers', [])
  .controller('HomePageController', HomePageController)
  ;
