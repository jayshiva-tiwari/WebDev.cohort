const teas = ['green tea', 'black tea', 'oolong tea', 'white tea', 'herbal tea'];

console.log(teas[2]);
console.log(`teas type is ${teas.length}`);


const chai = teas.push('mango chai');
const data = teas.pop();
console.log(data);

let index = teas.indexOf('green tea');

if (index !== -1) {
    teas.splice(index, 1); // remove the item at index 2
}

console.log(teas);

teas.forEach((tea, index) => {
    console.log(`index: ${index+1}, tea: ${tea}`);
});

let moreTeas = ['chai spice', 'matcha tea', 'yaupon holly tea', 'guayusa tea', 'yerba mate tea', 'herbal chai'];

let allTeas = teas.concat(moreTeas);
console.log(allTeas);

const newTeas = [...teas, 'coffee']; // 'important' to use spread operator to add coffee to the array
console.log(newTeas);

//object literals

const person = { 
    name: 'ram', 
    age: 30, 
    isStudent: true,
    family: {
        father: 'suresh',
        mother: 'sita',
        brother: 'shyam',
        hobbies: ['reading', 'sports', 'music']
    },
};

// console.log(person.family.hobbies[1]);

let updatedPerson = {
    ...person, // spread operator to copy the object
    age: 35, // update the age property
    hobbies: ['reading', 'sports', 'music', 'traveling'], // add a new property
};  // 'important' to use spread operator to copy the object

console.log(updatedPerson);

let {name, age, isStudent} = updatedPerson; // destructuring assignment to extract properties from the object

let [firstName, secondName] = moreTeas; // destructuring assignment to extract values from the array

console.log(secondName);


