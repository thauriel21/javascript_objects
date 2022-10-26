function Pokemon(name, height, hp, defense, aP , id) {
    this.name = name,
        this.height = height
    this.hp = hp
    this.defense = defense
    this.attackPoints = aP
    this.id = id

    this.sayhi = function () {
        return `Hola soy  ${this.name}`
    }


    this.showStars = () => {
        return `Nombre: ${this.name} , Altura: ${this.height} , Vida: ${this.hp} , Defensa: ${this.defense} , Ataque: ${this.attackPoints}`
    }


    this.attack = (enemy) => {
        enemy.hp -= (this.attackPoints - enemy.defense)
    }


    img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`
}

const pikachu = new Pokemon(25 `Pikachu`, 4, 35, 40, 55)
const charmander = new Pokemon(4 `Charmander`, 6, 39, 52, 43)


pikachu.attack(charmander)
charmander.attack(pikachu)


