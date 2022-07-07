

function sum(a, b) {
    return a + b;
}

function print(preText, input) {
    console.log(preText + " : " + input);
}

let rs = sum(5, 2);
print("sum 5 and 2", rs);

// arrow function
// expression function
let sub = (a, b) => a - b;
print("sub 3 and 1", sub(3, 1));

// callback function

let numbers = [1, 2, 3, 4, 5];

function filter(inputArr, predicate) {
    for (let e of inputArr) {
        if (predicate(e)) {
            console.log("matched element: " + e);
        }
    }
}
function isEven(e) {
    return e % 2 == 0;
}
console.log("----------------------------------");
filter(numbers, isEven);
console.log("----------------------------------");
filter(numbers,(e)=>e % 2 !=0);