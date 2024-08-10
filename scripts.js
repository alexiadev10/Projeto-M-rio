const form = document.querySelector (".formulario")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
   form.style.left =("50%")
   form.style.tranform= "translateX(-50%)"
   mascara.style.visibility= "visible"
}

function esconderForm(){
   form.style.left =("-300%")
   form.style.tranform= "translateX(0)"
   mascara.style.visibility= "hidden"
}