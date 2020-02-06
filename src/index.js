import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());