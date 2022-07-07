

function sum(a,b){
    return a+b;
}

function print(preText,input){
    console.log(preText+" : "+input);
}

let rs = sum(5,2);
print("sum 5 and 2",rs);

// arrow function
// expression function
let sub = (a,b)=> a-b;
print("sub 3 and 1",sub(3,1));