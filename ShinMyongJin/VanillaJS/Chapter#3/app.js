// const title = document.getElementById('title');

// title.innerText = 'Got you!';

// console.log(title.className);

// const title = document.querySelector('#hello');
// const title = document.querySelectorAll('#hello');

// const title = document.querySelector('.hello:first-child h1');

// console.log(title);

// title.style.color = 'blue';

const title = document.querySelector('div.hello:first-child h1');

console.dir(title);

function handleTitleClick() {
  title.style.color = 'blue';
}
function handleMouseEnter() {
  title.innerText = 'Mouse is here';
}

function handleMouseLeave() {
  title.innerText = 'Mouse is gone';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
