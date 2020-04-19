var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

const preventDefault = e => {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};

const keydown = e => {
  for (var i = keys.length; i--; ) {
    if (e.keyCode === keys[i]) {
      preventDefault(e);
      return;
    }
  }
};

const wheel = e => {
  preventDefault(e);
};

export const disableScroll = () => {
  const root = document.querySelector('#root');

  if (root.addEventListener) {
    root.addEventListener('DOMMouseScroll', wheel);
  }
  root.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
  document.addEventListener('touchmove', preventDefault, false);

  // Prevents body from jerking to the right when the scrollbar disappears
  document.body.style.overflow = 'hidden';
  root.style.marginRight = '15px';
};

export const enableScroll = () => {
  const root = document.querySelector('#root');

  if (root.removeEventListener) {
    root.removeEventListener('DOMMouseScroll', wheel);
  }
  root.onmousewheel = document.onmousewheel = document.onkeydown = null;
  document.removeEventListener('touchmove', preventDefault, false);

  document.body.style.overflow = 'auto';
  root.style.marginRight = '0px';
};
