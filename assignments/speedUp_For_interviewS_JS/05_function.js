function greet(name) {
    return `Hello, ${name}!`;

}

// console.log(greet('Alice')); // "Hello, Alice!"

//directly calling the function

function greet(name) {
    return `Hello, ${name}!`;

} ('Bob'); // "Hello, Bob!"


const person = {
    name: "ram",
    greet: function () {
        // return `Hello, ${this.name}!`;
    }
}

// console.log(person.greet()); // "Hello, ram!"

const person2 = {
    name: "sita",
}

// console.log(person.greet.call(person2)); // "Hello, sita!"


const bindGreet = person.greet.bind(person2);
// console.log(bindGreet()); // "Hello, sita!"
// bind() method creates a new function that, when called, has its this keyword set to the provided value


// quickly revision of JS

// console.log('hey yee');

// const oneMan = {
//     manName: 'krishna',
//     greet: function () {
//         console.log(this.manName);
//     },
// }

// setTimeout(oneMan.greet, 2*1000);

setTimeout(() => {
    // console.log('hello');
}, 2 * 1000); // 2 sec delay minimum  ( maximum jab tak callstack khali nahi hoga tab tak wait karega)

// console.log('bey bey');



// lets understand the JS working

//  when we run the code, the js engine do some magic and gives the output, here is the one important thing to understand is callStack(js engine)(stack is first in first out) it quickly run the code & give the output, it's doesn't wait for the output, so now the settimeout is not the part of the callstack.

// so the browser is register the setTimeout and it will be executed after 2 sec, so the callstack is empty and the browser is waiting for the setTimeout to be executed. 

//the callback queue is waiting for the callstack to be empty, so when the callstack is empty, the callback queue will be executed. after the process is completed the callback queue will pass the function to the callstack and it will be executed with the help of th event loop, so the event loop is the one which is responsible for executing the callback queue when the callstack is empty. so the event loop will check if the callstack is empty or not, if it is empty then it will execute the callback queue. so this is how the js engine works.

// console.log('hey');

const obj = {
    name: 'Hari',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// obj.greet(); // "Hello, my name is John"

// setTimeout(obj.greet.bind(obj), 2 * 1000); // output will be "Hello, my name is undefined" because the this keyword is not bound to the obj object anymore. with out bind method the this keyword is bound to the window object  otherwise it will be undefined.

// console.log('bey bey');


//Now the scop is entered in picture.

// 1. Global scope
// 2. Function scope
// 3. Block scope
// 4. Lexical scope
// 5. Dynamic scope
// 6. Module scope
// 7. Closure scope
// 8. Hoisting scope
// 9. Temporal dead zone scope

// lets understand promise

const myWeather = fetch('https://google.com');

//create own promise

function orderPizza() {
    return new Promise((resolve, reject) => {
        let pizzaReady = Math.random() > 0.5; // randomly true or false

        setTimeout(() => {
            if (pizzaReady) {
                resolve("🍕 Pizza is ready!");
            } else {
                reject("❌ Pizza shop is closed.");
            }
        }, 1000);
    });
}

orderPizza()
    .then(msg => console.log("SUCCESS:", msg))
    .catch(err => console.log("ERROR:", err));


// console.log(myWeather); // promise {<pending>} // this is a promise, so the promise is a object.

console.log('hello');

setTimeout(() => console.log('hey there'), 0);

Promise.resolve().then(() => console.log('promise is resolved')
)

// setTimeout(() => console.log('hey there'), 0);

// console.log('bye bye');


//The concept of starvation in js:

// Starvation is a situation in which microtask queue is not getting executed because the microtask queue is always getting executed first in this case callback queue is not getting executed this is called starvation.

//example of starvation:

setTimeout(() => console.log('hey there'), 1);

Promise.resolve().then(() => {
    // console.log('promise is resolved')
    Promise.resolve().then(() => {
        // console.log('promise is resolved')
        Promise.resolve().then(() => {
            // console.log('promise is resolved');
            Promise.resolve().then(() => {
                // console.log('promise is resolved');
                Promise.resolve().then(() => {
                    // console.log('promise is resolved');
                    Promise.resolve().then(() => {
                        // console.log('promise is resolved');
                        Promise.resolve().then(() => {
                            // console.log('promise is resolved');
                            Promise.resolve().then(() => {
                                // console.log('promise is resolved');
                            })
                        })
                    })
                })
            }
            )
        }
        )
    }
    )
}
);

// setTimeout(()=> console.log('hey there'), 1);

//hoisting in js

console.log(a); // undefined
var a = 10;
console.log(a); // 10

//Hoisting is a mechanism in js where the variable and function declarations are moved to the top of their scope before the code is executed. so the variable is declared but not initialized, so it will be undefined. so the hoisting is done by the js engine. so the js engine will hoist the variable and function declarations to the top of their scope before the code is executed. so the hoisting is done by the js engine. so the js engine will hoist the variable and function declarations to the top of their scope before the code is executed.

