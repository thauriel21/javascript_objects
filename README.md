# objetos en javascript.

hemos visto los objetos primitivos de javascript como :

- Numbers
- Boolean
- Strings
- Symbols
- Null
- Undefined

otros elementos de javascript muy utilizados, pero que no son los primitivos, ya que tienen "superpoderes" (métodos) son :

- Arreglos
- Objetos

Ejemplos 

```javascript
var arr = []
var obj = {}
```

Los arreglos se declaran utilizando `[]` y los objestos se declaran con llaves `{}`.

Los arreglos tienen sus elementos ordenados por indices, en cambio los objetos no tienen indice.
 Sus elementos se rescatan u obtienen mediante **llaves**.   
 Ejemplo:
 ``` javascript
 var hero = {
    name: "Thor",
    weapon: "martillo",
    hair: "rubio"
 }
 console.log(hero["name"])
 console.log(hero["weapon"])
 console.log(hero["hair"])
 ```
 