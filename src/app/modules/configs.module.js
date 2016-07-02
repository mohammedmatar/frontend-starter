/**
 * @ngdoc overview
 * @name configs
 * @description
 * ## frontend.configs
 * _______________________
 * 
 */
import { default as toastrConfig } from '../configs/toastr.config';
import { default as routeConfig  } from '../configs/route.config';

export default angular.module('frontend.configs', [])
  .config( toastrConfig )
  .config( routeConfig  )
;
