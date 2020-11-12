import _ from 'lodash';

class Lib {
    static sayHi(){
        console.log('hi boy');
    }
    static saySthg(){
        let greetings = `hey boy, it's ${new Date().toLocaleDateString()} now`;
        let r = _.join(['Hello', 'webpack', greetings], ' ');
        console.log(r);
        // return r;
    }
    static sayHello(name = 'Riddle'){
        console.log(`hello, Master ${name}.`);
    }
    // getResult = (x, y) => x + y;
    getResult(x, y){
        return x + y;
    }
}

export default Lib;
