/**
* @ngdoc overview
* @name controllers
* @description
* ## frontend.controllers
* _______________________
* angular controllers
*/
import { MainController } from '../main/main.controller';

export default angular.module('frontend.cotrollers', [])
  .controller('MainController', MainController)
  ;
