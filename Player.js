class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    calculateDamage(attackRoll) {
        return this.attack * attackRoll;
    }

    calculateDefense(defenseRoll) {
        return this.strength * defenseRoll;
    }

    reduceHealth(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;
