/*
1 objetivo- quando o usuario clicar no botão mostrar mais deve abrir os projetos que estao escondidos no html

passo 1- pegar o botao mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

passo 2- identificar o clique no botao

passo 3- adicionar classe ativo nos projetos escondidos

Objetivo 2- esconder o botão de mostrar mais
passo 1-  pegar o botao e esconder ele

*/


//1 objetivo- quando o usuario clicar no botão mostrar mais deve abrir os projetos que estao escondidos no html
//passo 1- pegar o botao mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    console.log('teste');
    //passo 3- adicionar classe ativo nos projetos escondidos
    mostrarMaisProjetos();
    
    //Objetivo 2- esconder o botão de mostrar mais
    //passo 1-  pegar o botao e esconder ele

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
