const saleDate = [
    {product: 'Tea', price: 10},
    {product: 'Coffee', price: 15},
    {product: 'Juice', price: 8},
    {product: 'Soda', price: 5},
    {product: 'Water', price: 2},
    {product: 'Milk', price: 3},
    {product: 'Beer', price: 20},
]

// Function to calculate the total price of all products in the array

function calculateTotalPrice(saleDate) {
    let totalPrice = 0;
    for (let i = 0; i < saleDate.length; i++){
        totalPrice = totalPrice + saleDate[i].price;
    }
    return totalPrice;
}

// calculateTotalPrice(saleDate);

let totalPrice = 0;
const totalPriceElement = saleDate.reduce(
    (acc, sales)=>acc + sales.price, 0
);
// console.log(totalPriceElement);


let myArray = [1, 2, 3, 4, 5];

let total = 0;

const totalElement = myArray.reduce((acc , num)=>{
        return acc + num
}, 0);

// console.log(totalElement);


const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0,
);

// console.log(sum); // 6


// important for interview  this is the definition of the pipe function 
const pipe =
    (...functions) =>
    (initialValue) =>
        functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

let inventory = [
    {name: 'widget A', stock: 30},
    {name: 'widget B', stock: 70},
    {name: 'widget C', stock: 50},
    {name: 'widget D', stock: 10},
    {name: 'widget E', stock: 120},
    {name: 'widget F', stock: 60},
    {name: 'widget G', stock: 170},

]

//filter out items with stock less than 60

const lowStock = inventory.filter((item)=>{
    return item.stock < 60;
});

// console.log(lowStock);


let userActivities = [
    {user: 'John', activityCount: 10},
    {user: 'Bob', activityCount: 5},
    {user: 'Alice', activityCount: 15},
    {user: 'Charlie', activityCount: 8},
    {user: 'Dave', activityCount: 12},
]

// find the user with the highest activity count
const highestActivity = userActivities.reduce((maxUser, user)=> {
        return user.activityCount > maxUser.activityCount ? user : maxUser;
})

// console.log(highestActivity); // {user: 'Alice', activityCount: 15}


const expenses = [
    {description: 'groceries',category: 'Food', amount: 200},
    {description: 'rent', category: 'Housing', amount: 1200},
    {description: 'utilities', category: 'Housing', amount: 300},
    {description: 'transportation', category: 'Transport', amount: 150},
    {description: 'dining out', category: 'Food', amount: 100},
    {description: 'internet', category: 'Housing', amount: 60},
]

//make a report of total expenses by category

// const expenseReport = expenses.reduce((acc, expense) => {
//     if (acc[expense.category]) {
//         acc[expense.category] += expense.amount;
//     } else {
//         acc[expense.category] = expense.amount;
//     }
//     return acc;
// }, {});

const expenseReport = expenses.reduce((report, expense)=>{
    report[expense.category] = ( report[expense.category] || 0) + expense.amount;
    return report;
}, {});

// console.log(expenseReport); // {Food: 300, Housing: 1560, Transport: 150}

const userTask = [
    {user: 'John', completed: true, priority: 1},
    {user: 'Bob', completed: false, priority: 2},
    {user: 'Alice', completed: true, priority: 3},
    {user: 'Charlie', completed: false, priority: 1},
    {user: 'Dave', completed: true, priority: 2},
    {user: 'Eve', completed: false, priority: 3},
    {user: 'Frank', completed: true, priority: 1},
]

const completedTasks = userTask
    .filter(
        (task)=>{
            return task.completed === true;
        }
    )
    .sort(
        (a, b) => {
            return a.priority - b.priority;
        }
    );

// console.log(completedTasks); 

const movies = [
    {title: "Inception", rating: [4,3,5]},
    {title: "The Dark Knight", rating: [5,5,4]},
    {title: "Interstellar", rating: [4,4,4]},
    {title: "Dunkirk", rating: [3,4,5]},
    {title: "Tenet", rating: [4,3,4]},
    {title: "Memento", rating: [5,5,5]},
]

//calculate the average rating for each movie

const Rating = movies.map((movie)=>{
    const total = movie.rating.reduce(
        (acc, rating)=>{
            return acc + rating;
        }
    )
    const averageRating = total / movie.rating.length;
    //     movie.rating = averageRating;
    // return movie; // it will change the original array
    return {
        title: movie.title,
        averageRating: averageRating.toFixed(1),
    }   
})


// console.log(Rating); // [{title: "Inception", averageRating: 4.33}, ...]
// console.log(movies);


