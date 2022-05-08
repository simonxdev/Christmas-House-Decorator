const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)

const activeicons = ["🏡"]

function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
  if (decorator.checked){
    house.innerText = ""
    for (let i = 0;i < activeicons.length;i++){
      house.innerText += activeicons[i]
    }
  } else {
    house.innerText = "🏡"
  }
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.


// Open Emoji Options

const btnemojis = document.getElementById("btnicons")
const emojipopup = document.getElementById("emojipopup")

btnemojis.addEventListener("click", function(){
  emojipopup.classList.remove("hidden")
})

// Exit Button

const exit = document.getElementById("exit")

exit.addEventListener("click", function(){
  emojipopup.classList.add("hidden")
})

// Add Icon to Arrays Start or End

const icon = document.getElementById("iconlist")
const btnaddtostart = document.getElementById("btnaddtostart")
const btnaddtoend = document.getElementById("btnaddtoend")
const emojicount = document.getElementById("countemojis")
const emojicount2 = document.getElementById("countemojis2")
btnaddtostart.addEventListener("click", addtostart)
function setemojicount(){
  emojicount.innerText = activeicons.length
  emojicount2.innerText = activeicons.length
}
function addtostart(){
  activeicons.unshift(icon.value)
  setemojicount()
}
btnaddtoend.addEventListener("click", addtoend)
function addtoend(){
  activeicons.push(icon.value)
  setemojicount()
}




