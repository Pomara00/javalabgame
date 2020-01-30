const randomDamage = _ => Math.floor(Math.random() * 10 + 1);
console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
};
console.log(chooseOption("Mitch", "Patrick"));

const attackPlayer = function (health) {
    return health - randomDamage();
};
console.log(attackPlayer(100));

const logHealth = (player, health) => {
    console.log(`${player} health:${health}.`)
};
logHealth("Mitch", 95)

const logDeath = (winner, loser) => {
    console.log(`"${winner} defeated ${loser}"`)
};
logDeath("Mitch", "Patrick")

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    };
}
console.log(isDead(0))

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }
    }
}