# posting--page - BlogPost

## 🖊 Descrição do projeto

<p>Trata-se de um projeto onde tem-se a simulação de um blog, onde o usuário pode realizar uma postagem de um tema de sua preferência, digitando um título e o conteúdo da postagem.</p>
<p>O projeto foi feito utilizando html, css e JavaScript, e o mesmo tem a finalidade de cumprir requisitos do sendo projeto de certificação para um curso disponibilizado pela plataforma DevStart em parceria com o Senai, onde o mesmo é voltado para Front-End</p> 

## 👩‍💻 O que foi utilizado para desenvolvimento do projeto

<p>Foram utilizados, respectivamente, HTML5 e CSS para estruturação e estilização da página, e teve-se a utilização da linguagem de programção JavaScript, para efetuar a conexão com a API e possibilitar a devida postagem do blog</p>

## 🧾 Como utilizar

* Clone o repositório em sua máquina
* Abra a pasta do projeto em sua Ide
* Execute o projeto
* Digite no Input que está abaixo do `<h2>Título da postagem</h2>` o título referente a sua postagem
* Digite na área de texto, que fica logo abaixo do `<h2>Texto da postagem</h2>` , o contédo de sua postagem
* Clique no botão enviar, o qual localiza-se logo abaixo dos itens citados acima
* Sua postagem Aparecerá em uma `<div>`, a qual está logo acima do formulário, ou seja, acima dos itens citados anteriormente.

## ⚙️ Especificações técinicas

Para atender aos requisitos do projeto, foram implementados os seguintes pontos:

* **Manipulação de DOM:** Seleção dinâmica de elementos para captura de dados e renderização de resultados. Tal conceito se faz muito visível no uso de **document.querySelector()**.
* **Consumo de API:** Utilização da **Fetch API** para realizar requisições assíncronas (POST).
* **Endpoint utilizado:** `https://jsonplaceholder.typicode.com/posts`
* **Tratamento de Eventos:** Uso do `addEventListener`, tendo como evento definido o `"submit"`, para interceptar o envio do formulário e `preventDefault()` para gerenciar o fluxo de dados sem recarregar a página.
* **Comunicação JSON:** Envio de dados estruturados em objeto JSON com os headers apropriados.

## 🧠 Aprendizados

Este projeto foi fundamental para consolidar conhecimentos em:
1. Como o Front-end se comunica com serviços externos (APIs).
2. A importância da semântica no HTML para acessibilidade.
3. Manipulação de estados da interface (exibir na tela o que foi enviado para o servidor).
4. Organização de estilos CSS utilizando variáveis e pseudo-classes (`:hover`, `:active`).

---
✨ Desenvolvido por [Lucas da Silva Rocha] como parte da certificação DevStart/Senai.


