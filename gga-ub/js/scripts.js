$('#sidebar').affix({
      offset: {
        top: 245
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
    target: '#leftCol',
    offset: navHeight
});


var moving = false;
function rotation(element, deg, dir){
  if (moving && deg == 0) { return 0; }
  element.style.MozTransform = "rotate("+ deg + "deg)";
  if (deg < 360 && deg > -360){
    moving = true;
    setTimeout(function() { rotation(element, deg+3*dir, dir); }, 5);
  } else {
    moving = false;
  }
}
