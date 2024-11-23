const Dice = require('./Dice');

class MagicalArena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.dice = new Dice();
    }

    determineFirstAttacker() {
        return this.player1.health <= this.player2.health ? this.player1 : this.player2;
    }

    fight() {
        let attacker = this.determineFirstAttacker();
        let defender = attacker === this.player1 ? this.player2 : this.player1;
        
        console.log(`---------- Starting Fight: ${this.player1.name} vs ${this.player2.name} ------------\n`);
        while (this.player1.isAlive() && this.player2.isAlive()) {
            console.log(`Turn: ${attacker.name} attacks ${defender.name}`);

            const attackRoll = this.dice.roll();
            const defenseRoll = this.dice.roll();

            const attackDamage = attacker.calculateDamage(attackRoll);
            const defenseValue = defender.calculateDefense(defenseRoll);

            const netDamage = Math.max(0, attackDamage - defenseValue);
            defender.reduceHealth(netDamage);

            console.log(`${attacker.name} rolls ${attackRoll} (Damage: ${attackDamage})`);
            console.log(`${defender.name} rolls ${defenseRoll} (Defense: ${defenseValue})`);
            console.log(`${defender.name} takes ${netDamage} damage! Health: ${defender.health}`);

            if (!defender.isAlive()) {
                console.log(`${defender.name} has been defeated! ${attacker.name} wins!`);
                break;
            }

            // Swap roles
            [attacker, defender] = [defender, attacker];
        }
        console.log(`\n------------------------- Fight Ended -------------------------------`);
    }
}

module.exports = MagicalArena;
