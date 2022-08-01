class GuessingGame {
    constructor() {
        this.numbers = [];
        this.number;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.numbers = [];
        for (let i = this.min; i < this.max; i++) {
            this.numbers.push(i);
        }
        return this.numbers;
    }

    guess() {
        this.number = this.numbers[Math.round(this.numbers.length / 2)];
        return this.number;
    }

    lower() {
        this.setRange(this.min, this.number);
    }

    greater() {
        this.setRange(this.number, this.max);
    }
}

module.exports = GuessingGame;