// Define an object named car1 with properties speed set to 200 and color set to 'yellow'.
const car1 = {
    speed: 200,
    color: 'yellow'
}

// Create a new object named car2 using the spread operator to copy the properties of car1.
const car2 = {...car1}

// Change the value of the speed property in car1 to 201.
car1.speed = 201

// Log the speed properties of both car1 and car2 to the console.
console.log(car1.speed, car2.speed)



function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);


