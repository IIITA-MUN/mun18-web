// One page scroll
$(document).ready(function() {
    scrollFunc();
    function scrollFunc() {
      $("#scrollLink").click(function(event){
        event.preventDefault();
        var toLink = "sec";
        $("html body").animate({
          scrollTop: $("#"+toLink).offset().top
        },999);
      });
    }
});
