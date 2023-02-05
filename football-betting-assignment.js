const game = {
 team1: 'Bayern Munich',
 team2: 'Borrussia Dortmund',
 players: [
 [
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
 ],
 [
 'Burki',
 'Schulz',
 'Hummels',
 'Akanji',
 'Hakimi',
 'Weigl',
 'Witsel',
 'Hazard',
 'Brandt',
 'Sancho',
 'Gotze',
 ],
 ],
 score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 },
 };


 let players1 , players2;
//  console.log(players1, players2);

 const [gk1 , ...fieldPlayers1]=game.players[0];
 const [gks2 , ...fieldPlayers2]=game.players[1];

 let allPlayers =[...game.players[0] , ...game.players[1]];
const players1Final=[...game.players[0],'Thiago', 'Coutinho', 'Perisic'];

const {team1 ,x:draw ,team2 }=game.odds;
// console.log(team1,draw,team2)


function printGoals(...playerNames){

    console.log(`${playerNames} Number of Goals: ${team1}`);
}
printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');

let result=Math.min(team1,team2);
console.log(result);
 //  console.log(allPlayers);

//  console.log(`gk: ${gkTeam1}, fieldplayers: ${fieldPlayersTeam1}`);
//  console.log(`gk: ${gkTeam2}, fieldplayers: ${fieldPlayersTeam2}`);
