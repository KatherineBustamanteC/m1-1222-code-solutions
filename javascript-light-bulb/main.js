var container = document.querySelector('.container');
var dot = document.querySelector('.dot');
var isDark = false;

dot.addEventListener('click', function () {
  if (isDark) {
    container.className = 'container';
    dot.className = 'dot';
    isDark = false;
  } else {
    container.className = 'dark-container';
    dot.className = 'dark-dot';
    isDark = true;
  }
});
