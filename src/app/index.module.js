/* global malarkey:false, moment:false */
/**
 * @ngdoc overview
 * @name app
 * @description
 * ## frontend
 * _______________________
 * base module
 *
 */

import { default as core }       from  './modules/core.module';
import { default as services }   from  './modules/services.module';
import { default as components } from  './modules/components.module';
import { default as directives } from  './modules/directives.module';
import { default as controllers } from './modules/controllers.module';

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';


angular.module('frontend', [
   core.name,
   services.name,
   directives.name,
   components.name,
   controllers.name
])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
;
