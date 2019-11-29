var kittens = ["Milo","Otis","Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens = [...kittens,name]
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.shift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function desctructivelyRemoveFirstKitten(){
  kittens.unshift()
  return kittens
}
