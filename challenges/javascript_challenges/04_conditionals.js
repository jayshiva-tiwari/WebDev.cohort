function calculateGrade(marks) {
    // Return grade based on the marks
    marks = marks
    if (marks >= 90) {
        console.log("A")
    }
    else if (marks >= 80) {
        console.log("B")
    }
    else if (marks >= 70) {
        console.log("c")
    }
    else if (marks >= 60) {
        console.log("D")
    }
    else {
        console.log("f")
    }
}

calculateGrade(85)