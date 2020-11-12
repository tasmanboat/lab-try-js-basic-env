import _ from 'lodash';
import './style.css';

// js common error
// https://www.runoob.com/js/js-strict.html

function component(){
  let n = 3;
  n = 5.4;
  // ----- try eslint with lines below ----
  // a = 10; // This can be ignored like below:
  // aa= 10; // eslint-disable-line no-undef
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', n], ' ');
  element.classList.add('hello');

  // --- ES6, which is supported by default(without "jsx supported by babel" thing) by webpack ---
  const getMsg = () => "cappuccino for now, please";
  let getResult = (x, y) => x + y;
  getResult = (x, y) => x * y;
  getResult = (x, y) => { x * y; return 380; };
  element.innerHTML = getMsg();
  element.innerHTML = getResult(2,9);
  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  const arr1 = materials.map(material => material.length);
  element.innerHTML = arr1.length;
  return element;
}
document.body.appendChild(component());
