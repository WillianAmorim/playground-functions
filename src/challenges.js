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

// Desafio 8
function fizzBuzz(arrayNumbers) {
 let array = []

for(index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0){
      array.push("fizzBuzz")
    } else if (arrayNumbers[index] % 3 === 0){
      array.push("fizz")
    } else if (arrayNumbers[index] % 5 === 0){
      array.push("buzz")
    } else {
      array.push("bug!")
    }
  }
  return array
}



// Desafio 9
function encode(string) {
  let senha = ""

  for(let index of string){
    if (index === "a"){
      senha += 1
    }else if (index === "e"){
      senha += 2
    }else if (index === "i"){
      senha += 3
    }else if (index === "o"){
      senha += 4
    }else if (index === "u"){
      senha += 5
    }else {
      senha = senha + index
    }
  }
    return senha
}

function decode(string1) { 
  let senha1 = ""
  for(let index1 of string1){
    if (index1 === "1"){
    senha1 += "a"
    }else if (index1 === "2"){
      senha1 += "e"
    }else if (index1 === "3"){
      senha1 += "i"
    }else if (index1 === "4"){
      senha1 += "o"
    }else if (index1 === "5"){
      senha1 += "u"
    }else {
      senha1 = senha1 + index1
    }
  }
  return senha1 
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