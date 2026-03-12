const heroes = ['Rocket', 'Captain America', 'Iron Man', 'The Hulk', 'The Thing'];

console.log(heroes[0]);
console.log(heroes[2]);
console.log(heroes.at(-1));

heroes[1] = 'Black Panther';
console.log(`The leader of the team is now ${heroes[1]}.`);
console.log(`The full array is: ${heroes}`);

heroes[3] = 'Doctor Strange';
const backupHero = heroes.at(-1);
console.log(`The lead superhero is ${heroes[3]} and my backup superhero is ${backupHero}.`);

console.log(`New Mission: ${heroes[0]}, and ${heroes[1]}, will lead ${heroes[2]}, ${heroes[3]}, and ${heroes[4]} into battle.`);