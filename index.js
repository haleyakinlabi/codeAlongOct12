//step 1: grab html element 

//grab plus button
const plusBtn = document.querySelector('#plus-btn')
//grab minus button
const minusBtn = document.querySelector('#minus-btn')
//grab counter text on screen 
const counterText = document.querySelector('#counter')
//grab reset button
const resetBtn = document.querySelector('#reset-btn')




//step 2: write our function

let count = 0 
//add button function
function increase(){
    count++
    counterText.textContent = count
    //console.log(count)
}
//minus button function
function decrease(){
    count--
    counterText.textContent = count
    //console.log(count)
}
//reset button function
function reset(){
    count = 0 
    counterText.textContent = count
}

//step 3: combine step 1 and 2 using addEventListener

//add
plusBtn.addEventListener('click' , increase)
//minus
minusBtn.addEventListener('click', decrease)
//reset
resetBtn.addEventListener('click', reset)

//------------------theme project---------

//step 1 grab all the buttons

const themeBtns = document.querySelectorAll(".theme-buttons")

//step 2 write a function 
//event is a huge object
//.target is a property inside of event

function selectTheme(event){
    console.log(event.target)
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')
    
    for(let i = 0; i < themeBtns.length; i++){
        buttons[i].className = theme
}

}


//step 3 

for(let i = 0; i < themeBtns.length; i++){
        themeBtns[i].addEventListener('click', selectTheme)
}