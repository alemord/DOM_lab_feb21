
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');


mainEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');


mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.classList.add('flex-around');
topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');



   // Iterate over menuLinks array
for (var i = 0; i < menuLinks.length; i++) {
  // Create new anchor element
  var linkEl = document.createElement('a');

  // Set href attribute to link object's href property
  linkEl.setAttribute('href', menuLinks[i].href);

  // Set the new element's content to the value of the text property of the link object
  linkEl.textContent = menuLinks[i].text;

  // Append the new element to the topMenuElelement
  topMenuEl.appendChild(linkEl);
}


 