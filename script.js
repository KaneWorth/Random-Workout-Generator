"use strict";
// Random Exercise Plan Generator
//////////////////////
// ----- KEY ----- //
////////////////////////////
// ----- EXERCISES ----- //
//////////////////////////
// Upper Body
const traps = ["Dumbell Shrugs", "Barbell Shrugs", "Upright Rows"];
const shoulders = [
  "Standing Millitary Press",
  "Seated Dumbell Shoulder Press",
  "Shoulder Press Machine",
  "Side Lateral Raises",
];
const chest = ["15° Incline Dumbell Press", "Bench Press", "Chest Press Machine"];
const back = [
  "Seated Lateral Pull Down",
  "Seated Row Machine (wide grip)",
  "Seated Row Machine (close grip)",
  "Lower Back Machine",
];
const arms = ["Tricep Push Down (rope)", "Tricep Push Down (bar)", "Tricep Dumbell Kickbacks"];
// Lower Body
const legsQuads = [
  "Leg Press Machine",
  "Adductor Machine (inner thigh)",
  "Bodyweighted Squats",
  "Dumbell Lunges",
  "Barbell Lunges",
];
const legsHams = ["Hamstring Curl Machine", "Stiff Legged Dead-Lift"];
const legsGlutes = ["Abductor Machine (glutes)", "Body Weighted Bridges"];
const legsCalfs = ["Standing Calf Raises", "Machine Calf Raises"];

///////////////////////
// ----- REPS ----- //
/////////////////////
const lowReps = "4 - 8 reps";
const midReps = "8 - 12 reps";
const highReps = "12 - 20 reps";

////////////////////////////////
// ----- USER INPUT ONE----- //
//////////////////////////////
document.querySelector(".a").addEventListener("click", function () {
  // Changing The Question
  document.querySelector("h2").innerHTML = "How many reps would you like to do for your Upper Body workout?";
  // Adding New Button
  const choicesOne = document.getElementById("first-choice");
  let z = document.createElement("button");
  z.className = "z";
  z.textContent = "4 - 8 reps";
  choicesOne.appendChild(z);

  const choicesTwo = document.getElementById("first-choice");
  let y = document.createElement("button");
  y.className = "y";
  y.textContent = "8 - 12 reps";
  choicesTwo.appendChild(y);

  const choices = document.getElementById("first-choice");
  let x = document.createElement("button");
  x.className = "x";
  x.textContent = "12 - 20 reps";
  choices.appendChild(x);

  const a = document.querySelector(".a");
  const b = document.querySelector(".b");
  // Removing Old Button
  a.remove();
  b.remove();

  ///////////////////////////////////
  // ----- USER INPUT ONE A ----- //
  /////////////////////////////////
  // 4 - 8 reps
  z.addEventListener("click", function () {
    // Randomizer
    const randomTraps = traps[Math.floor(Math.random() * traps.length)];
    const randomShoulders = shoulders[Math.floor(Math.random() * shoulders.length)];
    const randomChest = chest[Math.floor(Math.random() * chest.length)];
    const randomBack = back[Math.floor(Math.random() * back.length)];
    const randomArms = arms[Math.floor(Math.random() * arms.length)];

    // Result
    document.getElementById("result").innerHTML = "Your Plan:";
    document.querySelector(".one").innerHTML = randomTraps + ": 3 sets, " + lowReps;
    document.querySelector(".two").innerHTML = randomShoulders + ": 3 sets, " + lowReps;
    document.querySelector(".three").innerHTML = randomChest + ": 3 sets, " + lowReps;
    document.querySelector(".four").innerHTML = randomBack + ": 3 sets, " + lowReps;
    document.querySelector(".five").innerHTML = randomArms + ": 3 sets, " + lowReps;
  });

  // 8 - 12 reps
  y.addEventListener("click", function () {
    // Randomizer
    const randomTraps = traps[Math.floor(Math.random() * traps.length)];
    const randomShoulders = shoulders[Math.floor(Math.random() * shoulders.length)];
    const randomChest = chest[Math.floor(Math.random() * chest.length)];
    const randomBack = back[Math.floor(Math.random() * back.length)];
    const randomArms = arms[Math.floor(Math.random() * arms.length)];

    // Result
    document.getElementById("result").innerHTML = "Your Plan:";
    document.querySelector(".one").innerHTML = randomTraps + ": 3 sets, " + midReps;
    document.querySelector(".two").innerHTML = randomShoulders + ": 3 sets, " + midReps;
    document.querySelector(".three").innerHTML = randomChest + ": 3 sets, " + midReps;
    document.querySelector(".four").innerHTML = randomBack + ": 3 sets, " + midReps;
    document.querySelector(".five").innerHTML = randomArms + ": 3 sets, " + midReps;
  });

  // 12 - 20 reps
  x.addEventListener("click", function () {
    // Randomizer
    const randomTraps = traps[Math.floor(Math.random() * traps.length)];
    const randomShoulders = shoulders[Math.floor(Math.random() * shoulders.length)];
    const randomChest = chest[Math.floor(Math.random() * chest.length)];
    const randomBack = back[Math.floor(Math.random() * back.length)];
    const randomArms = arms[Math.floor(Math.random() * arms.length)];

    // Result
    document.getElementById("result").innerHTML = "Your Plan:";
    document.querySelector(".one").innerHTML = randomTraps + ": 3 sets, " + highReps;
    document.querySelector(".two").innerHTML = randomShoulders + ": 3 sets, " + highReps;
    document.querySelector(".three").innerHTML = randomChest + ": 3 sets, " + highReps;
    document.querySelector(".four").innerHTML = randomBack + ": 3 sets, " + highReps;
    document.querySelector(".five").innerHTML = randomArms + ": 3 sets, " + highReps;
  });
});

/////////////////////////////////
// ----- USER INPUT TWO ----- //
///////////////////////////////
const two = document.querySelector(".b").addEventListener("click", function () {
  // Changing The Question
  document.querySelector("h2").innerHTML = "How many reps would you like to do for your Lower Body workout?";
  // Adding New Button
  const choicesOne = document.getElementById("first-choice");
  let z = document.createElement("button");
  z.className = "z";
  z.textContent = "4 - 8 reps";
  choicesOne.appendChild(z);

  const choicesTwo = document.getElementById("first-choice");
  let y = document.createElement("button");
  y.className = "y";
  y.textContent = "8 - 12 reps";
  choicesTwo.appendChild(y);

  const choices = document.getElementById("first-choice");
  let x = document.createElement("button");
  x.className = "x";
  x.textContent = "12 - 20 reps";
  choices.appendChild(x);

  const a = document.querySelector(".a");
  const b = document.querySelector(".b");
  // Removing Old Button
  a.remove();
  b.remove();

  ///////////////////////////////////
  // ----- USER INPUT TWO A ----- //
  /////////////////////////////////
  // 4 - 8 reps
  z.addEventListener("click", function () {
    // Randomizer
    const randomQuads = legsQuads[Math.floor(Math.random() * legsQuads.length)];
    const randomHams = legsHams[Math.floor(Math.random() * legsHams.length)];
    const randomGlutes = legsGlutes[Math.floor(Math.random() * legsGlutes.length)];
    const randomCalfs = legsCalfs[Math.floor(Math.random() * legsCalfs.length)];

    // Result
    document.getElementById("result").innerHTML = "Your Plan:";
    document.querySelector(".one").innerHTML = randomQuads + ": 3 sets, " + lowReps;
    document.querySelector(".two").innerHTML = randomHams + ": 3 sets, " + lowReps;
    document.querySelector(".three").innerHTML = randomGlutes + ": 3 sets, " + lowReps;
    document.querySelector(".four").innerHTML = randomCalfs + ": 3 sets, " + lowReps;
  });

  // 8 - 12 reps
  y.addEventListener("click", function () {
    // Randomizer
    const randomQuads = legsQuads[Math.floor(Math.random() * legsQuads.length)];
    const randomHams = legsHams[Math.floor(Math.random() * legsHams.length)];
    const randomGlutes = legsGlutes[Math.floor(Math.random() * legsGlutes.length)];
    const randomCalfs = legsCalfs[Math.floor(Math.random() * legsCalfs.length)];

    // Result
    document.getElementById("result").innerHTML = "Your Plan:";
    document.querySelector(".one").innerHTML = randomQuads + ": 3 sets, " + midReps;
    document.querySelector(".two").innerHTML = randomHams + ": 3 sets, " + midReps;
    document.querySelector(".three").innerHTML = randomGlutes + ": 3 sets, " + midReps;
    document.querySelector(".four").innerHTML = randomCalfs + ": 3 sets, " + midReps;
  });

  // 12 - 20 reps
  x.addEventListener("click", function () {
    // Randomizer
    const randomQuads = legsQuads[Math.floor(Math.random() * legsQuads.length)];
    const randomHams = legsHams[Math.floor(Math.random() * legsHams.length)];
    const randomGlutes = legsGlutes[Math.floor(Math.random() * legsGlutes.length)];
    const randomCalfs = legsCalfs[Math.floor(Math.random() * legsCalfs.length)];

    // Result
    document.getElementById("result").innerHTML = "Your Plan:";
    document.querySelector(".one").innerHTML = randomQuads + ": 3 sets, " + highReps;
    document.querySelector(".two").innerHTML = randomHams + ": 3 sets, " + highReps;
    document.querySelector(".three").innerHTML = randomGlutes + ": 3 sets, " + highReps;
    document.querySelector(".four").innerHTML = randomCalfs + ": 3 sets, " + highReps;
  });
});
