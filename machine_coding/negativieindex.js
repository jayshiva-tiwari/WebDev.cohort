//Question: negative index in array;
//this question is asked in the interview to know your knowledge in proxy and how to use it in the array;

// first understand the proxy.

const user = {
    name: "John",
    age: 30,
    password: "123456"
}// example of proxy

const userProxy = new Proxy(user, {
    get(target, prop){

        console.log(target, prop);
        
        if (prop === "password"){
            // throw new Error("You are not allowed to access this property");
            console.log('bhai abhi nahi milega');
            
        }

        return target[prop];
    }
})

console.log(userProxy.password); // Error: You are not allowed to access this property


//question: negative index in array;

let arr = [1, 2, 3, 4, 5];

function negativeIndex(arr) {
    return new pro
}



