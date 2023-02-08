// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// // delayedDeparture ✅✅✅✅✅

function caseCovertor(variableNames){

    let counter=1;
    for(const variable of variableNames){
         const divideVariable = new String(variable).toLowerCase().split("_");
         const camelCase=[divideVariable[0], divideVariable[1].charAt(0).toUpperCase() ,divideVariable[1].slice(1) ];
        
         console.log(`${camelCase.join("")} ${"✅".repeat(counter)}`);
         counter++;
    }
}
function resultFunction(){
    const inputTexts= new String(document.querySelector(".input-text").value).split(" ");
    // console.log(inputTexts);
    caseCovertor(inputTexts);

}

document.querySelector(".converter").addEventListener("click", resultFunction);

// underscore_case first_name some_Variable calculate_AGE delayed_departure