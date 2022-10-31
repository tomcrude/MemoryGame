const main = document.querySelectorAll(".page");
const start = document.querySelector(".start")
const counter = document.querySelector(".counter")
const count = document.querySelector(".count")

const number = document.querySelector(".number")
const loose = document.querySelector(".loose")
const count2= document.querySelector(".count2")
const count3= document.querySelector(".count3")
const insert = document.querySelector(".insert")
const buton = document.querySelector(".buton")

const score = document.querySelector(".score")

const newElement = document.createElement("audio");
const newElement2 = document.createElement("audio");


var contador = 0
var code = ""
var con = 1
var setscore = 0

function sleep(time)
{
    return(new Promise(function(resolve, reject) {
        setTimeout(function() { resolve(); }, time);
    }));
}

insert.addEventListener("submit", (e)=>{e.preventDefault()})

start.addEventListener("click", async ()=>{
    main[1].classList.replace("inactive","active")
    
    

    for (contador; contador < 1; contador++){
        count2.classList.remove("inactive-2")
        insert.classList.add("inactive-2")
        insert.value = null
        
        

        await game1()
      
        await game3()
        
       

    }

    
    
})

async function game1 () {
    
    for (let i = 3; i != -1; i--){
        await sleep(700)
        count.innerHTML = i;
        if (i == 0){
            count.classList.add("inactive-2")
            count2.classList.add("inactive-2")
            count3.classList.add("inactive-2")
        }   
    
    }  
}


async function game3 () {
    

    for (let i = 0; i <= con; i++){
        await sleep(800)
        
        number.classList.remove("number-style")
        
        await sleep(600)

       
        newElement.setAttribute("src", "pin.mp3")
        newElement.setAttribute("autoplay", "")
        

        var random = Math.random()*9
        var round = Math.round(random)
        var string = round.toString()
        code = code + string

        number.innerHTML = Math.round(random)
        
        number.classList.add("number-style")
        
        if (i == con){
            await sleep(500)
        }
    }

    for (let i = 10; i >= 0; i--){
        if (i == 9){
        insert.classList.remove("inactive-2")
        count3.classList.remove("inactive-2")
        number.innerHTML = "?"    

       

    }
        await sleep(800)
        count3.innerHTML = i;
        if (i == 0){
            count2.innerHTML = "The game start in:"}
    }
   
    if (code == insert.value){
        count.classList.remove("inactive-2")
        count.innerHTML = 3

        newElement.setAttribute("src", "pin2.mp3")
        newElement.setAttribute("autoplay", "")

        setscore = setscore + 1

        count3.innerHTML = "Well done!"
        contador = -1
        code = ""
        con = con + 1
    
    } else {main[2].classList.replace("inactive", "active");score.innerHTML = setscore;
    newElement.setAttribute("src", "pin3.mp3")
    newElement.setAttribute("autoplay", "")
   
   
}

}

loose.addEventListener("click", ()=>{
    main[0].classList.replace("inactive","active")
    main[1].classList.replace("active","inactive")
    main[2].classList.replace("active","inactive")
    count.classList.remove("inactive-2")
    count.innerHTML = 3
    count3.classList.add("inactive-2")
    setscore = 0;
    contador = 0
    code = ""
    con = 1
})



