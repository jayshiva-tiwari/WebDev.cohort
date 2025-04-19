const fun = ['chai', 'js', 'array', 'object', 'games', 'musics'];

// console.log(fun.fill('ram', 3, 4)); // fill the array with chai from index 0 to 2



const constructorArray = new Array(5);

constructorArray.push('chai', 'js', 'array', 'object', 'games', 'musics');

constructorArray.unshift('ram', 'sasha', 'prasad'); // add elements at the beginning of the array
constructorArray.shift(); // remove the first element of the array
constructorArray.pop(); // remove the last element of the array
constructorArray.splice(2, 2); // remove elements from index 2 to 4

const iterator = constructorArray.keys();

for(const key of iterator){

    // console.log(`key: ${key}, value: ${constructorArray[key]}`);
}

// console.log(constructorArray.length);


// console.log(fun);


// -------------------------------------------------------------------------------------------

// challenges

// 1.

let teas = ['black tea', 'oolong tea', 'green tea', 'pu-erh tea', 'herbal tea', 'chai spice', 'matcha tea', 'yaupon holly tea', 'guayusa tea', 'yerba mate tea', 'herbal chai'];

// console.log(teas);


// 2.

teas.push('chamomile tea');
teas.unshift('chamomile tea')

console.log(teas);

// 3.

// teas.pop(); last item removed
// teas.splice(1, 1); // second item removed
const index = teas.indexOf( 'oolong tea'); // find the index of the item chai oolong

if (index > -1){  // if the item is found if not -1
    teas.splice(index, 1); 
}else{
    console.log('not found');
}

// teas.splice(2,3)//2 is a index and 3 is a number of items to remove

// 4.

const newTeas = teas.filter( function (tea) {
    return tea !== 'herbal tea' & tea !== 'herbal chai'; // remove all herbal tea and chamomile tea
})

// 5.



console.log(newTeas);