function teaStole(type){
    if (type === 'mango chai'){
        console.log('mango chai is a type of tea');
    }
    else{
        console.log('mango chai is not a type of tea');
    }
}

// teaStole('Mango chai');

function store(amount, discount) {
    const convertedAmount = Number(amount);
    if (convertedAmount > 500){
        const total = convertedAmount - (convertedAmount * discount / 100);
        console.log(`Total amount after discount is ${total}`);
    } else {
        console.log(`Total amount is ${convertedAmount} without discount`);
    }

    // return convertedAmount > 500 ? convertedAmount - (convertedAmount * discount / 100) : convertedAmount;  // ternary operator
}

store("600", 20);

function trafficLight(color){
    const light = String(color);
    console.log(`The traffic light is ${light}`);
    
    if (light === 'red'){
        console.log('Stop!');
    }
    else if (light === 'yellow'){
        console.log('Slow down!');
    }
    else if (light === 'green'){
        console.log('Go!');
    }
    else {
        console.log('Invalid color!');
    }
}

function traffic(color){
    switch (color) {
        case "red":
            console.log("stop");
            break;
    case "yellow":
            console.log("slow down");
            return;
        case "green":
            console.log("go");
            return;
        default:
            break;
    }
}

traffic('red');
// trafficLight('red');

function testing(value) {
    if (value){
        console.log('Value is true');
    }else{
        console.log('Value is false');
    }
}

// testing(false); // false
// testing(true); // true
// testing(0); // false
// testing(1); // true
// testing(''); // false 
// testing('hello');//true
// testing(null); // false
// testing(undefined); // false
// testing(NaN); // false
// testing({}); // true 
// testing([]); // true
// testing([0, 1, 2]); // true


function login(admin , password, loginId) {
    const userPassword = Number(password);
    if (admin === "shiva" && (userPassword === 1234 || loginId === "shiva6543")){
        console.log("Login successful");
    }else{
        console.log("Invalid credentials");
    }
}

login('shiva', '124', 'shiva6543'); // Login successful