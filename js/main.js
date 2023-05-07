const butaoN = document.querySelector(".nop")

butaoN.addEventListener("mouseover", function() {
    butaoN.style.top =  Math.random() * 400 + "px"
    butaoN.style.left =  Math.random() * 400 + "px"
   /*  butaoN.style.buttom =  Math.random() * 400 + "px"
    butaoN.style.rigth =  Math.random() * 400 + "px" */
})


const butaoS = document.querySelector(".sim") 
let n
butaoS.addEventListener("click", function () {
    if(n === 1){
        mensagem();
    }
    const coracao = document.getElementById("img")
    coracao.classList.add("core");
    const akai = document.getElementById("akai")
    akai.classList.add("core")
    butaoN.remove()
    const titulo = document.querySelector("h1")
    titulo.textContent = "I Love You"

    butaoS.textContent = "clique aqui"
     n = 1
})
/* butaoS.addEventListener("click", function(){
   
})   
 */
function mensagem(){
    window.location.href = "https://www.youtube.com/watch?v=rU_7krLXJiQ"
}
