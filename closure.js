function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const say = createGreeting("hey");

console.log(say("kait"));

//Creates different games with unique scores

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}
const hockeyGame = createGame("Hockey");
