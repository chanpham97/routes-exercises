// 'npm install express' or the shorthand version 'npm i express'
const express = require('express')
const app = express()

const data = {
    "facts": [
        "Raccoons are highly intelligent animals and can remember the solution to tasks for up to three years.",
        "They are known for their dexterous front paws and can open jars, latches, and even doors.",
        "Raccoons have a unique habit of dipping their food in water before eating, which is why their scientific name is 'Procyon lotor,' meaning 'washing bear.'",
        "They are omnivores and have a varied diet that includes fruits, nuts, insects, and even small animals.",
        "Raccoons have excellent night vision, which helps them forage for food after dark.",
        "Their black 'mask' is thought to help reduce glare and improve their night vision.",
        "Raccoons are excellent climbers and can scale trees and buildings with ease.",
        "They are highly adaptable and can thrive in various environments, from forests to urban areas."
    ],
    "images": [
        "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjY29vbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/1200px-Raccoon_in_Central_Park_%2835264%29.jpg",
        "https://cdn.mos.cms.futurecdn.net/YYH9o4wmSXJfvbzRTq5BTY-1200-80.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRFycEPDGOaexxYtNS2JJCKOTEoiut4ao6w&s",
        "https://t3.ftcdn.net/jpg/01/73/37/16/360_F_173371622_02A2qGqjhsJ5SWVhUPu0t9O9ezlfvF8l.jpg",
        "https://i.etsystatic.com/13552881/r/il/afd271/2440612616/il_1080xN.2440612616_3a4k.jpg",
        "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-02/hgic_veg_wildlife_raccoon.jpg?itok=4_9NoT-I",
        "https://arrowexterminating.com/wp-content/uploads/Raccoon-Dangers-to-Be-Aware-Of.jpg"
    ]
}

function getRandomIndex(){
    return Math.floor(Math.random() * 8);

}

// Code Along
// Write a GET route handler for / that uses .send() to respond with "Welcome to the Raccoon API" 


// Write a GET route handler for /image that uses .json() to respond with the URL of the first image


// Coding Exercises
// Write a GET route handler for /fact that uses .json() to respond with the URL of the first fact


// Write the route handler for /random/fact that returns a random fact from the data object
// Call the getRandomIndex() to get a random index


// Write the route handler for /random/image that returns a random image from the data object
// Call the getRandomIndex() to get a random index


// Write the route handler for /api/docs that returns a message describing the two /random endpoints
// e.g. "The endpoints you can hit are /random/fact for ... and /random/image for ..."
// Stretch: make it nicely formatted with HTML tags



// Stretch: Write the route handler for /dogs/random and call the Dog CEO API for a random image
// https://dog.ceo/dog-api/documentation/random




app.listen(3000, () => {
    console.log("Server is running at localhost:3000")
})