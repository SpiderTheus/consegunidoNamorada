const butao = document.querySelector(".nop")

console.log(butao)

butao.addEventListener("mouseover", function() {
    butao.style.top =  Math.random() * 400 + "px"
    butao.style.left =  Math.random() * 400 + "px"
    butao.style.buttom =  Math.random() * 400 + "px"
    butao.style.rigth =  Math.random() * 400 + "px"
})


