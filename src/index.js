import _ from 'lodash';
import printFn from './print.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  printFn();  
  return element;
}

document.body.appendChild(component());