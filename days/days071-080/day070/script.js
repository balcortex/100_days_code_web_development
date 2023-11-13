console.clear();

const body = document.querySelector('body');

const p2 = body.lastElementChild;
const h2 = p2.previousElementSibling;
const h1 = body.firstElementChild;
const p = h1.nextElementSibling;

body.removeChild(p2);
body.removeChild(h2);
h1.removeAttribute('style');
p.removeAttribute('class');
