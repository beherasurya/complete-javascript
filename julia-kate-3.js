const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

dogs.map(function(dogObject){
    // console.log(dogObject);
    let recFood = Math.round(dogObject.weight ** 0.75 * 28);
   
    dogObject.recommendedFood =recFood;
    // console.log(recFood);
})
// console.log(dogs);
    // dogs.map(function(dogObject){
    //    if(dogObject.owners.find(dogOwner => dogOwner === 'Sarah')){
    //     // console.log('found');
    //     if(dogObject.curFood < dogObject.recommendedFood)
    //     {
    //         console.log(`Eating Too Little`);
    //     } else {
    //         console.log(` Eating Too Much`);
    //     }
    //    }
    // })


    // let ownersEatTooLittle =[], ownersEatTooMuch=[]; 
    
    // dogs.map(function(dogObject){
    //     if(dogObject.curFood < dogObject.recommendedFood){
    //         ownersEatTooLittle.push(dogObject.owners);
    //     }
    //     else if(dogObject.curFood > dogObject.recommendedFood){
    //         ownersEatTooMuch.push(dogObject.owners);
    //     }
    // })
    // console.log(dogs)
    // console.log(ownersEatTooLittle );
    // console.log(ownersEatTooMuch);

    // console.log(ownersEatTooLittle.flat());
    // console.log(ownersEatTooMuch.flat());

    // ownersEatTooLittle= ownersEatTooLittle.flat();
    // ownersEatTooMuch = ownersEatTooMuch.flat();
    // // console.log(ownersEatTooLittle);
    // // console.log(ownersEatTooMuch);

    // let ownerToLit="",ownerToMuch="";
    // ownersEatTooLittle.map(function(owner , index){
    //     if(index !== ownersEatTooLittle.length-1)
    //     {
    //         ownerToLit += `${owner} and `;
    //     }
    //     else{
    //         ownerToLit +=owner
    //     }
    // })
    // ownersEatTooMuch.map(function(owner , index){
    //     if(index !== ownersEatTooMuch.length-1)
    //     {
    //         ownerToMuch += `${owner} and `;
    //     }
    //     else{
    //         ownerToMuch +=owner;
    //     }
    // })
    // console.log(`${ownerToLit} Eat too Little`);
    // console.log(`${ownerToMuch} Eat too Much`);

// dogs.map(function(dogObject){
//     if(dogObject.curFood === dogObject.recommendedFood){
//         console.log(`true`);
//     }else {
//         console.log(`false`);
//     }
// });
let okayAmountFoodDog=[];
dogs.map(function(dogObject){

    if(dogObject.curFood > (dogObject.recommendedFood * 0.90) && dogObject.curFood < (dogObject.recommendedFood * 1.10)){

        
            
        // console.log(`Okay Food`);
        okayAmountFoodDog.push(dogObject);
    }else{
        // console.log(`not okay food`);
    }
});
// console.log(dogs);
// console.log(okayAmountFoodDog);
const array=dogs.slice().sort((a , b)=>a.recommendedFood - b.recommendedFood);
console.log(array);

