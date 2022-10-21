# Tela de login | tela de cadastro | armazenamento de dados

## Tela de login arquivo login.js 


    Mudando o eye ao clicar de "password" para text

    1º Busca a class do eye
    let btn = document.querySelector(".bi-eye") 

    2º fazer evento de click 
    3º dentro do evento buscar o input com class="senha" 
    4º verificação, se o inputSenha for igual a password 
    mudar para text "getAttribute" busca o que esta dentro
                    "setAttribute" envi o comando 
    se não muda para password

    ```js
        btn.addEventListener("click", () => {
        let inputSenha = document.querySelector("#senha")

        if(inputSenha.getAttribute('type') == 'password') {
            inputSenha.setAttribute('type', 'text')
        }else {
            inputSenha.setAttribute('type', 'password')
        }
    })
  ```



