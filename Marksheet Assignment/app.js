var marksheet = function (marks) {
    if (marks >= 95 && marks <= 100) {
        console.log("your grade is A++");
    }
    else if (marks >= 89.10 && marks <= 94.90) {
        console.log("your grade is A+");
    }
    else if (marks >= 84.10 && marks <= 89) {
        console.log("your grade is A");
    }
    else if (marks >= 79.10 && marks <= 84) {
        console.log("your grade is B++");
    }
    else if (marks >= 74.10 && marks <= 79) {
        console.log("your grade is B+");
    }
    else if (marks >= 69.10 && marks <= 74) {
        console.log("your grade is B");
    }
    else if (marks >= 59.10 && marks <= 69) {
        console.log("your grade is C");
    }
    else if (marks >= 49.10 && marks <= 59) {
        console.log("your grade is D");
    }
    else if (marks >= 40 && marks <= 49) {
        console.log("your grade is E");
    }
    else if (marks < 40 && marks > 0) {
        console.log("your grade is Fail");
    }
    else {
        console.log("enter valid marks.");
    }
};
marksheet(93.65); //Output = your grade is A+
