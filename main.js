const botao = document.querySelector("#botao-enviar");
const titulo = document.querySelector("#titulo-postagem");
const texto = document.querySelector("#texto-postagem");
const form = document.querySelector("#formulario");
const registraTitulo = document.querySelector("#renderizador-titulo");
const registraTexto = document.querySelector("#renderizador-texto");


const url = 'https://jsonplaceholder.typicode.com/posts'

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = {
    title: titulo.value,
    body: texto.value,
    userId: 1
}

    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
    .then(response =>{
        return response.json();
    }).
    then(dados => {
        console.log(dados)
        registraTitulo.innerHTML = dados.title;
        registraTexto.innerHTML = dados.body;

        titulo.value = "";
        texto.value = "";
    }).catch(error => {
        console.error("[ERRO]: " + error)
    }).finally(() => {
        console.log("Evento concluído");
    })
})

