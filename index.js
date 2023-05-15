const userInfo = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `I'm ${userInfo.infos.name} coding from ${userInfo.infos.campus} with my Charentaises`,
    e: "oO",
    T: `EZ`,
  })
);
