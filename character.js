
"use strict";

// Step 4: Welcome message
alert(`Welcome to your underwater kingdom!
Are you ready to start your journey and create your hero?`);

// Step 5: Character name
const charName = prompt(`What is your character's name?`, "Wanderer") || "Wanderer";

// Step 6: Pet name
const pet = prompt(`What pet or companion does ${charName} have?`);

// Step 7: Superpower
const superpower = prompt(`What superpower does ${charName} have?`);

// Step 8: Training years
const trainingYearsText = prompt(`How many years has ${charName} been training?`);

const trainingYears = Number(trainingYearsText);

console.log("Training years text:", trainingYearsText, typeof trainingYearsText);
console.log("Training years number:", trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

// Step 9: Monster fighting
const likesFighting = confirm(`Does ${charName} like fighting monsters?
Click OK for Yes and Cancel for No.`);

console.log("Likes fighting:", likesFighting, typeof likesFighting);

// Step 10: Loading message
alert(`The underwater kingdom is almost ready for ${charName}!`);

// Step 11: Final character story
alert(`====================================
UNDERWATER KINGDOM ADVENTURE
====================================

Name: ${charName}
Pet: ${pet}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}

Deep beneath the ocean, ${charName} explores the magical underwater kingdom with ${pet} by their side.
Using the power of ${superpower}, they protect the kingdom from dangerous sea monsters and discover hidden treasures.

====================================`);
