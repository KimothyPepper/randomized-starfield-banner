var $body =$('body');

for (i = 0; i < 75; i++) {
  var $star = $('<div>')

  $star.addClass('star');
  $star.css({
    'top': Math.random() * (document.documentElement.clientHeight - 100),
    'left': Math.random() * (document.documentElement.clientWidth - 100),
    'opacity': Math.random()
  });
  $body.append($star);
}
