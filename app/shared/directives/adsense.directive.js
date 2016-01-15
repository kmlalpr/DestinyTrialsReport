'use strict';

angular.module('trialsReportApp')
  .directive('adsense', function() {
    return {
      restrict: 'A',
      replace: true,
      template: [
        '<ins class="adsbygoogle"' +
             'style="display:block"' +
             'data-ad-client="ca-pub-7408805581120581"' +
             'data-ad-slot="1127916954"' +
             'data-ad-format="rectangle">' +
        '</ins>'
      ].join(''),
      controller: function () {
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    };
});
