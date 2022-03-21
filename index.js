const myInfo = require("./information");
let cowsay = require("cowsay");


console.log(cowsay.say({
    text: (`${myInfo.myName} est à la ${myInfo.myBootCamp}`),
    e: "oO",
    T: "U "
}));