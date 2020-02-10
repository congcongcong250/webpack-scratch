import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  document.addEventListener('click', () => {
    import(/* webpackChunkName: 'goBoom', webpackPrefetch: true */'./newModule').then(({default: boom}) => {
      boom('main');
      setTimeout(()=> boom('end'),1000);
    }).catch(e => console.log(e));
  });
  return element;
}

document.body.appendChild(component());