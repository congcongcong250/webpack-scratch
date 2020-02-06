import _ from 'lodash';
import printFn from './print.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  printFn();  
  document.addEventListener('click', function(){printFn('Click on document updated.')});
  return element;
}

document.body.appendChild(component());