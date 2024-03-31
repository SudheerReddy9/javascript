var bird = {
    hasWings:true,
    canFly:true,
    hasFeathers:true
}
var eagle1 = Object.create(bird);
console.log("Eagle:",eagle1)
console.log("eagle1 has wings:",eagle1.hasWings)
console.log("eagle1 can fly",eagle1.canFly)
console.log("eagle1 has Feathers",eagle1.hasFeathers)