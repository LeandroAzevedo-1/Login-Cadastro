/*

    Mudando o eye quando clicar "password"
    1º Buscar a class do eye
    2º fazer um evento de click 
    3º dentro do evento buscar o input com id="verSenha" 
    4º fazer uma verificação, se o inputSenha for igual a password 
       mudo para text "getAttribute" busca o que esta dentro
                      "setAttribute" mudo o comando 
    se não muda para password

*/
let verSenha = document.querySelector("#verSenha") 

verSenha.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})

let confirmSenha = document.querySelector("#verSenhaConfirm") 
confirmSenha.addEventListener("click", () => {
    let inputConfirmSenha = document.querySelector("#confirmSenha")

    if(inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    }else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
