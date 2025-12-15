// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
let titleName = "Restaurant Name:"
// Start coding here
for (let i = 0; i < restaurants.length; i++) {
    // console.log(`${titleName} ${restaurants[i]}`);
    newRestaurants.push(`${titleName} ${restaurants[i]}`)
    
}

console.log(newRestaurants);
