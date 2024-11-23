const { expect } = require('chai');
const Player = require('./Player');
const Dice = require('../Dice');

describe('Player Class', () => {
    it('should reduce health correctly', () => {
        const player = new Player('TestPlayer', 100, 10, 5);
        player.reduceHealth(30);
        expect(player.health).to.equal(70);
    });

    it('should not reduce health below 0', () => {
        const player = new Player('TestPlayer', 50, 10, 5);
        player.reduceHealth(60);
        expect(player.health).to.equal(0);
    });
});

describe('Dice Class', () => {
    it('should return a value between 1 and 6', () => {
        const dice = new Dice();
        for (let i = 0; i < 100; i++) {
            const roll = dice.roll();
            expect(roll).to.be.gte(1).and.lte(6);
        }
    });
});
