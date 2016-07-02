/**
* @ngdoc overview
* @name services
* @description
* ## frontend.services
* _______________________
* angular services
*/
import { GithubContributorService } from '../../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../../app/components/webDevTec/webDevTec.service';

export default angular.module('frontend.services', [])
.service('githubContributor', GithubContributorService)
.service('webDevTec', WebDevTecService);
// .service('MainService', MainService);
