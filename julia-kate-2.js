// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
function calcAverageHumanAge(dogsAges){

    const humanAge = dogsAges.map((dAge)=> dAge <= 2 ? 2* dAge : 16 + dAge * 4);
    console.log(humanAge);

     const above18Age= humanAge.filter((hAge)=>hAge >= 18);
    console.log(above18Age);

    const totalAge = above18Age.reduce((dogHumanAge,currentAge)=>dogHumanAge + currentAge,0);
    console.log(totalAge);

    const averageDogAdultAge = Math.round(totalAge / (above18Age.length));
    console.log(averageDogAdultAge);
}

function calcAverageHumanAgeChanining(dogHumanAge){

    const totalAge = (dogHumanAge.map((dAge)=> dAge <= 2 ? 2* dAge : (16 + dAge) * 4)).
    filter((hAge)=>hAge >= 18).reduce((dogHumanAge,currentAge)=>dogHumanAge + currentAge,0);

    console.log(totalAge)
   

}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// calcAverageHumanAgeChanining([5, 2, 4, 1, 15, 8, 3]);
