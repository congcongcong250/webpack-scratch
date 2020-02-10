import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

export default function(name){
    console.log(name + 'Boom');
}