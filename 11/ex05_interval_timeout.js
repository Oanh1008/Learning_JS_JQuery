
// timeout : just do 1 time
setTimeout(function(){
    console.log("setTimeOut");
},2000);

let count = 0;
let runner= setInterval(function(){
    
    console.log("setInterval "+count);
    if(count === 5 ){
        clearInterval(runner)
    }
    count++;
},1000);