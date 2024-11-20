console.log('hello');
console.log('hi!', 'ok');

//alert('hello');

//한줄 주석
/*

여러줄 주석

*/
let str = 'hello';
let number = 30;
console.log('문자열:', str);
console.log('number:', number);

function sayHello() {
  console.log('Hello');
}

sayHello();

let obj = {
  //객체는 변수랑 함수를 가질 수 있구나~
  number: 30, //프로퍼티: 객체가 가지고 있는 변수
  sayHello: function () {
    console.log('obj>Hello');
  },
};

console.log(obj);
obj.sayHello();
