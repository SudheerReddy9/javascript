// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {

    for (dairies of dairy) {
        console.log(dairies);
    }
}
logDairy();
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ":" + bird[prop])
    }
}
birdCan();
// Task 3

function animalCan() {
    for (const key in bird) {
        if (bird.hasOwnProperty(key)) {
            console.log(key, ":", bird[key]);
        }
    }

    // Loop over properties in animal object
    for (const key in animal) {
        if (animal.hasOwnProperty(key)) {
            console.log(key, ":", animal[key]);
        }
    }
}
animalCan();

