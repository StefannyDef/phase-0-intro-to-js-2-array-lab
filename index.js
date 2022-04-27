// Write your solution here!

let cats=['Milo', 'Otis', 'Garfield']; 

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
  }

  function destructivelyRemoveLastCat(name){
      cats.pop()
  }

function removeLastCat(){
    let copyOfCats = [...cats]
    copyOfCats.pop();
return copyOfCats

}


function removeFirstCat(){
    let copyOfCats = [...cats]
    copyOfCats.shift();
    return copyOfCats
}


    function prependCat(name){
    let copyOfCats = [name, ...cats]
    copyOfCats.unshift();
    return copyOfCats
    }

    function appendCat(name){
        let copyOfCats = [... cats, name]
       copyOfCats.push();
       return copyOfCats
    
    }