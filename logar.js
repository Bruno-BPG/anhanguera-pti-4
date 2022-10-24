let Usuário = document.getElementById("usuario")
let Senha = document.getElementById("password")
let btnlogin = document.getElementById("loginUsuario")

btnlogin.addEventListener("click" , resultados)

function resultados (value){
value.preventDefault()
if(Usuário.value == ""){
    alert("digite seu Usuário")
    return "login falhou"
}
if(Senha.value == ""){
    alert("digite sua Senha")
    return "falhou"
}
if(Usuário.value !== "" && Senha.value !== ""){
   window.location.href = "home.html"
    return "login"
}}