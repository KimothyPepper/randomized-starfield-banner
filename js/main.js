var $body = $('body');
var $star;

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    'top': Math.random() * (document.documentElement.clientHeight - 100),
    'left': Math.random() * (document.documentElement.clientWidth - 100),
    'transform': Math.random() * (document.documentElement.clientRotation - 100),
    'opacity': Math.random()
  });
  $body.append($star);
}
