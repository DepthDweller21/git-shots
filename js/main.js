//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let searchBox=document.querySelector('input')
let button=document.querySelector('#cocktail')
let instructions=document.querySelector('h3')
let image=document.querySelector('img')
let drinkName=document.querySelector('h2')
let next=document.querySelector('#next')
let index=-1
let drinkObject={}

button.addEventListener('click',cocktail)
next.addEventListener('click',nextCocktail)

function randomNumberGen(range){
    return Math.floor(Math.random()*range)
}

function displayStuff(dispInstructions,dispDrinkName,dispImage){

    instructions.innerText=dispInstructions //drink.strInstructions
    drinkName.innerText=dispDrinkName //drink.strDrink
    image.src=dispImage //drink.strDrinkThumb

}

function nextCocktail(){
    index++
    console.log(index)
    index>drinkObject.drinks.length-1?index=0:null;
    displayStuff(drinkObject.drinks[index].strInstructions,drinkObject.drinks[index].strDrink,drinkObject.drinks[index].strDrinkThumb)
}

function cocktail(){
    
    let choice=searchBox.value
    let url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice.replaceAll(' ','%20')
    fetch(url)
        .then(res => res.json())
        .then(data=>{
            drinkObject.drinks=data.drinks
            console.log(drinkObject.drinks.length)
            nextCocktail()         
        })
        .catch(err=>console.log(err))    
}

//user presses get cocktail button
// total drinks is initialised
// drink 1 is loaded
// user presses next drink
// drink 2 is shown
// if only 1 drink, same drink is shown again