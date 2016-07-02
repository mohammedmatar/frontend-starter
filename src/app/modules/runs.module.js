/**
 * @ngdoc overview
 * @name runs
 * @description
 * ## frontend.runs
 * _______________________
 */
import { default as runBlock } from '../runs/run-block.run';

export default angular.module('frontend.runs', [])
  .run(runBlock)
;
