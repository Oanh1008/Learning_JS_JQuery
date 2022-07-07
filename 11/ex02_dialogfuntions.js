
//confirm(text):boolean
// prompt(question,default_answer):string
//alert(text) :void
let question = "Are you 18 years old or older ?";
let isValidAge = confirm(question); // boolean

if(isValidAge ===  true){
    let accepted = confirm("Do you want to play game");
    if(accepted){
        let name = prompt("Enter your account name", "Your name");
        alert(`welcome ${name} to  CALCULATION game`);
        let a = + prompt("Enter a:", "0");
        let b = + prompt("Enter b:", "0");
        console.log(a+b);
        let rs= + prompt("Enter rs:","");

        //== :auto convert to the same type before compare
        if(rs === (a+b)){
            alert("correct");
        }
        else{
            alert("wrong");
        }
    }
    else{
        alert("See you around");
    }
}
console.log(isValidAge);