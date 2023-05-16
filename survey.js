const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?:  ', (answer1) => {
  rl.question("What's an activity you like to do?: ", (answer2) => {
    rl.question("What do you listen to while doing that?: ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?: " , (answer5) => {
          rl.question("Which sport is your absolute favourite?: ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`${answer1} loves to ${answer2} while listening to ${answer3}, eating ${answer4} for ${answer5}. In ${answer1}'s spare time, they love to play ${answer6} and is great at ${answer7}`)
              rl.close();
            })
          })
        })
      })
    })
  });
});