/**
 * @ngdoc overview
 * @name app
 * @description
 * ## frontend
 * _______________________
 * base module
 *
 */

import { default as core }        from  './modules/core.module';
import { default as services }    from  './modules/services.module';
import { default as components }  from  './modules/components.module';
import { default as directives }  from  './modules/directives.module';
import { default as controllers } from  './modules/controllers.module';
import { default as runs }        from  './modules/runs.module';
import { default as configs }     from  './modules/configs.module';

angular.module('frontend', [
   core.name,
   services.name,
   directives.name,
   components.name,
   controllers.name,
   configs.name,
   runs.name
])
  // .constant('malarkey', malarkey)
  // .constant('moment', moment)
;
