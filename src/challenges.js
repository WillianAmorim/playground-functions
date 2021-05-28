// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true))  {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}



// Desafio 4
function concatName(array) {
  let last = (array[array.length -1]) 
  let first = (array[0])
  let result = last + ", " + first
  
  return result

}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins || ties
    if (result === wins) {
      return (wins * 3) + (ties *1)
    } else if (result === ties) {
      return (ties * 1) + (ties *1)
    } else {

    }
}

// Desafio 6
function highestCount(array) {
  let maiorValor = array[0]
  for (index =0; index < array.length; index += 1){
    if (array[index] > maiorValor){
      maiorValor = array[index];
    }
  } 
  let valorIgual = 0
  for (index2 = 0; index2 < array.length; index2 += 1){
    if (array[index2] === maiorValor){
      valorIgual = valorIgual + 1
    }
  }
  return valorIgual
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

 
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let diferencaCat1 = Math.abs(cat1 - mouse) 
let diferencaCat2 = Math.abs(cat2 - mouse) 
let trombam = 0 
  if (diferencaCat1 > diferencaCat2) {
    return "cat2"
  } else if (diferencaCat2 > diferencaCat1) {
    return "cat1"
  } else if (diferencaCat1 === diferencaCat2){
    return "os gatos trombam e o rato foge"
  }
} 

console.log(catAndMouse(2, 0, 1))

// Desafio 8
function fizzBuzz(array) {
 // seu código aqui
}

// Desafio 9
function encode() {
/*  let novaVogal = 0 
  for (index = 0; index < string.length; i += 1)
    if (string[index] = "a"){
      string[index] = novaVogal
      novaVogal === "1"
      console.log()
    } */
}
function decode() { 
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
}