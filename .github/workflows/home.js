//Javascript Challengne - Arrays


//writing <ul>
let food = [
    "pears", 
    "kale", 
    "apples", 
    "grapefruits", 
    "bananas", 
    "kiwi", 
    "oranges", 
    "berries", 
    "celery", 
    "cookies"
    ];

for(let i = 0; i < food.length; i++){
    food[i] = "<br>" + food[i];
}

document.getElementById("list").innerHTML = food;

//length

function howMany() {
    document.getElementById("answerOne").innerHTML = food.length; 
}

//sort

function alpha() {
    document.getElementById("list").innerHTML = food.sort(); 
}

//reverse

function rev() {
    document.getElementById("list").innerHTML = food.reverse(); 
}

//firstitem
function first() {
   let first = food[0];
   document.getElementById("answerTwo").innerHTML = first; 
}

//lastitem
function last() {
    let last = food[food.length-1];
    document.getElementById("answerThree").innerHTML = last; 
 }

