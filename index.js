var kittens = ["Milo","Otis","Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens = [...kittens,name]
  return kittens
}
function destructivelyPrependKitten(name){
  kittens = [name,...kittens]
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function desctructivelyRemoveFirstKitten(){
  kittens.slice(0,kittens.length-1)
  return kittens
}
