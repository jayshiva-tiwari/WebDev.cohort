// Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
// in a similar way to the previous challenges
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

checkLeapYear(2024);