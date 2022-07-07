
// forindex,foreach 
let text = "loosely type";
for(let i = 0;i<text.length ;i++){
    console.log(text[i]+" ");
}

for(let i in text){
    console.log(text[i]+" ");
}

for(let letter of text){
    console.log(letter+ " ");
}