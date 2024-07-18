let marksheet = (marks:number) => {
    if (marks >= 95 && marks <= 100){
        console.log("your grade is A++")
    }else if (marks >= 90 && marks <= 94.99) {
        console.log("your grade is A+")
    }else if (marks >= 85 && marks <= 89.99) {
        console.log("your grade is A")
    }else if (marks >= 80 && marks <= 84.99) {
        console.log("your grade is B++")
    }else if (marks >= 75 && marks <= 79.99) {
        console.log("your grade is B+")
    }else if (marks >= 70 && marks <= 74.99) {
        console.log("your grade is B")
    }else if (marks >= 60 && marks <= 69.99) {
        console.log("your grade is C")
    }else if (marks >= 50 && marks <= 59.99) {
        console.log("your grade is D")
    } else if (marks >= 40 && marks <= 49.99) {
        console.log("your grade is E")
    }else if(marks < 40 && marks > 0){
        console.log("your grade is Fail")
    }else{
        console.log("enter valid marks.")
    }
}
marksheet(93.65) //Output = your grade is A+