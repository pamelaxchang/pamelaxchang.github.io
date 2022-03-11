function updatePosition() {
  var fixedElement = $("#fixed");
  if($(window).width() < 750)
    fixedElement.removeClass('position-fixed');
  else
    fixedElement.addClass('position-fixed');
}

updatePosition();

$(window).resize(function() {
  updatePosition();
})
