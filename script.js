let character  = document.getElementById('character')
let block = document.getElementById('block')
let title = document.getElementById('title')
let refresh_icon = document.getElementById('refresh_icon')

const jumpKeys = (event) => {
    if(event.isComposing || event.keyCode === 38 || event.keyCode === 32){
        if(character.classList != "animate"){
            character.classList.add("animate")
        }
        setTimeout(() => {
            character.classList.remove("animate")
        }, 500)
    }else{
        console.log("You KeyUP Not Registered For this game!")
    }
} 

const checkDead = setInterval(() => {
    // get Styles element
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    if(blockLeft<30 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none"
        block.style.display = "none"
        // alert("You Lose!!")
        refresh_icon.style.display = "block"
        title.textContent = "GAME OVER!"
    }
    
}, 10)