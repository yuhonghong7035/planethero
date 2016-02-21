(function() {
  var pageFactory = function() {
    var title = '';
    var header = '';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle; },
      header: function() { return header; },
      setHeader: function(newHeader) { header = newHeader; },
      makeActive: function(ele) {
        $('.cd-stretchy-nav ul li a').each (function(){$(this).removeClass('active');});
        $("#"+ele).addClass("active");
      }
    };
  };

  angular
    .module("planethero")
    .factory('Page', pageFactory);
})();
