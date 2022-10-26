function Pokemon(name, height, hp, defense, aP) {
    this.name = name,
        this.height = height
    this.hp = this.hp
    this.defense = defense
    this.attackPoints = aP


    this.sayhi = function () {
        return `Hola soy  ${this.name}`
    }

    
    this.showStars = () => {
        return `Nombre: ${this.name} , Altura: ${this.height} , Vida: ${this.hp} ,
     Defensa: ${this.defense} , Ataque: ${this.attackPoints}`
    }


    //this.attack = (enemy) => {
    //enemy.hp -= (this.attackPoints - enemy.defense)
    //}

}

const pikachu = new Pokemon(`Pikachu`, 4, 35, 40, 55)
const charmander = new Pokemon(`Charmander`, 6, 39, 52, 43)