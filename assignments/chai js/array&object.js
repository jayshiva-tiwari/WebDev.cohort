const fun = ['chai', 'js', 'array', 'object', 'games', 'musics'];

console.log(fun.fill('ram', 3, 4)); // fill the array with chai from index 0 to 2



const constructorArray = new Array(5);

constructorArray.push('chai', 'js', 'array', 'object', 'games', 'musics');

constructorArray.unshift('ram', 'sasha', 'prasad'); // add elements at the beginning of the array
constructorArray.shift(); // remove the first element of the array
constructorArray.pop(); // remove the last element of the array
constructorArray.splice(2, 2); // remove elements from index 2 to 4

const iterator = constructorArray.keys();

for(const key of iterator){
    console.log(`key: ${key}, value: ${constructorArray[key]}`);
}

console.log(constructorArray.length);


console.log(fun);


// -------------------------------------------------------------------------------------------


