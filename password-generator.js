// task 4 -

// Create a file named "password-generator"  
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Create a function that generates random passwords and console.log() that password.


const generator = require('generate-password');

let password =generator.generate({
    lenth: 15,
    number: true
});

console.log(password);