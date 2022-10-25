function Hero (name) {
this.name = name
this.sayName = function(){
    return `mi nombre es ${this.name}`
}
}

/*let chapulin = new Hero()
let minion = new Hero()
let minion2 = new Hero()
let doc = new Hero()
let vector = new Hero()*/

const names = ['chapulin', 'stuart', 'kevin', 'doctor nefario', 'vector']

const heroes =[]


/*for (let i = 0; i < names.length; i++){
    heroes.push(new Hero(names[i]))
}*/
names.forEach((name) => {
    heroes.push(new Hero(name))
})
heroes.forEach((hero)=>{
   console.log(hero.sayName())
}

)

console.log(heroes);




/*console.log(chapulin.name);
console.log(minion.name);
console.log(minion2.name);
console.log(doc.name);
console.log(vector.name);*/