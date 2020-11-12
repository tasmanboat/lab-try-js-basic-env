import _ from 'lodash';
import Lib from './12.mjs';

test2();

function test1(){
    var a1 = 'hello';
    console.log(a1);
    let greetings = `hey boy, it's ${new Date().toLocaleDateString()} now`;
    let result = _.join(['Hello', 'webpack', greetings], ' ');
    console.log(greetings);
    // const getMsg = () => "cappuccino for now, please";
    // let getResult = (x, y) => x + y;
    // result = getMsg();
    // result = getResult(2,9);
    console.log(result);
}
function test2(){
    Lib.sayHi();
    Lib.saySthg();
    Lib.sayHello('Julie');

    let lib = new Lib();
    let r = lib.getResult(1,10);
    console.log(r);

}
