class Combattant {
    constructor(name, health, attack, accuracy) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.accuracy = accuracy;
    }

    Accurate() {
        const random = Math.random();
        return random < this.accuracy;
    }

    Attack(opponent) {
        if (this.Accurate()) {
            console.log(`${this.name} attaque ${opponent.name} et inflige ${this.attack} points de dégâts !`);
            opponent.health -= this.attack;
            if (opponent.health < 0) opponent.health = 0;
        } else {
            console.log(`${this.name} attaque ${opponent.name} mais cela échoue !`);
        }
    }
}

const combattant1 = new Combattant("Elias", 50, 15, 0.6);
const combattant2 = new Combattant("Maximilien", 50, 12, 0.8);

console.log("Commencement du combat");
while (combattant1.health > 0 && combattant2.health > 0) {


    combattant1.Attack(combattant2);

    if (combattant2.health <= 0) {
        console.log(`${combattant2.name} est vaincu ! ${combattant1.name} remporte la victoire !`);
        break;
    }


    combattant2.Attack(combattant1);

    if (combattant1.health <= 0) {
        console.log(`${combattant1.name} est vaincu ! ${combattant2.name} remporte la victoire !`);
        break;
    }


    console.log(`${combattant1.name} : ${combattant1.health} PV`);
    console.log(`${combattant2.name} : ${combattant2.health} PV`);
}


console.log("Le combat est terminé !");
