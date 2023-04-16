// const title = document.getElementById('title');

// title.innerText = 'Got you!';

// console.log(title.className);

// const title = document.querySelector('#hello');
// const title = document.querySelectorAll('#hello');

// const title = document.querySelector('.hello:first-child h1');

// console.log(title);

// title.style.color = 'blue';

// const h1 = document.querySelector('div.hello:first-child h1');

// console.dir(h1);

// function handleTitleClick() {
//   h1.style.color = 'blue';
// }
// function handleMouseEnter() {
//   h1.innerText = 'Mouse is here';
// }

// function handleMouseLeave() {
//   h1.innerText = 'Mouse is gone';
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//   alert('copyer!');
// }

// function handWindowOffLine() {
//   alert('SOS no WIFI');
// }

// function handleWindowOnLine() {
//   alert('All good~');
// }

// h1.addEventListener('click', handleTitleClick);
// h1.addEventListener('mouseenter', handleMouseEnter);
// h1.addEventListener('mouseleave', handleMouseLeave);

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handWindowOffLine);
// window.addEventListener('online', handleWindowOnLine);

const h1 = document.querySelector('div.hello:first-child h1');

console.dir(h1);

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  h1.style.color = newColor;
}

h1.addEventListener('click', handleTitleClick);
