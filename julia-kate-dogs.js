function checkDogs(dogsJulia , dogsKate){

    let juliaDogs = [...dogsJulia];
    juliaDogs = juliaDogs.slice(1 , -2);

    const juliKateCorrectData = juliaDogs.concat(dogsKate);
    // console.log( juliKateCorrectData);
    // console.log(dogsJulia)
    juliKateCorrectData.forEach(function(dogType ,dogNumber){
            const dogPoppyIdentifier= dogType <3 ? `Dog Number ${dogNumber+1} is still a puppy` :
            `Dog number ${dogNumber+1} is an adult and is ${dogType} years old `;
            console.log(dogPoppyIdentifier);
            console.log(dogType,dogNumber)
    });
}

checkDogs([3, 5, 2, 12, 7] , [4, 1, 15, 8, 3] );
