$(document).ready(function() {

$("#sidenav-wrpr").hover(
  function () {
    $(".sidenav").removeClass("hidden");
  },
  function () {
    $(".sidenav").addClass("hidden");
  }
  );

});