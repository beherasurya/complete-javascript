const poll = {

    question: 'What is your favourite programming Language',
    options: ['0: JavaScript' , '1: Python' , '2: Rust' , '3: C++'],

    answers: new Array(4).fill(0),
    registerNew: function(){
           const choice= window.prompt("What is favourite Programming Language ?\n 0: Javascript \n 1: Python \n 2: Rust \n 3: C++ \n Write Option Number");
           if((!isNaN(choice)) && (Number(choice)<=this.options.length)){
            
            // console.log(this.answers);
            console.log(this.options[choice]);

            // let temp = this.answers[choice];
            // temp++;

            // this.answers[choice]=temp;
            this.answers[choice]++;
            console.log(this.answers);           
           }
           else{
            console.log("Give Valid Input");
           }
        // console.log(typeof choice)
           displayResults("string");
           displayResults("array");
    }   
}
function displayResults(type){
    if(type  === "string"){
        console.log(`Poll results are ${poll.answers}`);

    }else if(type === "array"){
        console.log(poll.answers);
    }


}

let fullName = poll.registerNew.bind(poll);
document.querySelector(".btn").addEventListener("click" , fullName);
// poll.registerNew();