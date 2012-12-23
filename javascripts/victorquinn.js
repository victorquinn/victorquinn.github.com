/*
* Custom javascript for VictorQuinn.com
*/

// Enable Smooth Scrolling.
// Adapted from http://css-tricks.com/snippets/jquery/smooth-scrolling/

jQuery(document).ready(function($) {
  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);

  var scrollElem = 'body';

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
});



// GoSquared
var GoSquared = {};
GoSquared.acct = "GSN-520134-O";
(function(w){
   function gs(){
     w._gstc_lt = +new Date;
     var d = document, g = d.createElement("script");
     g.type = "text/javascript";
     g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";
     var s = d.getElementsByTagName("script")[0];
     s.parentNode.insertBefore(g, s);
   }
   w.addEventListener ?
     w.addEventListener("load", gs, false) :
     w.attachEvent("onload", gs);
 })(window);



// Persistent Headers
function updateHeaders() {
  var scrollTop = $(window).scrollTop(),
      floatingHeader = $(".floatingHeader");

  if (scrollTop > 250) {
    floatingHeader.css({ "visibility": "visible" });
  }
  else {
    floatingHeader.css({ "visibility": "hidden" });
  }
};

$(document).ready(function() {
    $("body").append("<div class='floatingHeader'><a href='http://victorquinn.com'><h3>Victor Quinn</h3></a><a href='mailto:mail@victorquinn.com?subject=Hello!' class='floatingEmail'><img src='/images/envelope.png'></a><a class='backtotop' href='#top'>Back to top</a></div>");
    $(window)
      .scroll(updateHeaders)
      .trigger("scroll");
});
