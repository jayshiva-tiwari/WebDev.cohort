// let numberOfGuests = 0;

// if (numberOfGuests <= 0){
//     console.log("they don't want pizza");
// }

// else if (numberOfGuests <= 1){
//     console.log("they want small of pizza");
// }
// else if(numberOfGuests <= 4){
//     console.log("they want medium of pizza");
// }
// else{
//     console.log("they want large of pizza");
// }


let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// -------------------------------------------------------------------------------------------


// marks

function getMarks(marks){
    if (marks >= 90){
        return 'A+';
    }else if (marks >= 80){
        return 'B+';
    }else if (marks >= 70){
        return 'C';
    }else if (marks >= 60){
        return 'D';
    }else if (marks >= 50){
        return 'E';
    }else{
        return 'Failed';
    }
}

console.log(getMarks(85)); 


const tea = ['chai', 'greenTea', 'blackTea', 'whiteTea', 'oolongTea'];

for(let t = 0; t < tea.length; t++){   //we can't use const here because we are changing the value of t in each iteration
    console.log(`tea : ${t} is ${tea[t]}`);
}



let sum = [1,2,3,4,5,6,7,8,9,10];

function getSum(sum){
    let total = 0;
    for(let i = 0; i < sum.length; i++){
        total = total + sum[i];
    }
    return total;
}

let result = getSum([7,3,8,2,5,6,4,1,9]);

console.log(`result : ${result}`);


let loop = (getSum(num));

console.log(`loop : ${loop}`);




for (let i = 0; i < 6; i++) {
    const element = array[i];
    console.log(`${star} ${element}`);
    
}