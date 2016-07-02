/**
* @ngdoc overview
* @name directives
* @description
* ## frontend.directives
* _______________________
* angular directives
*/
import { NavbarDirective } from '../../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../../app/components/malarkey/malarkey.directive';

export default angular.module('frontend.directives', [])
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
;
