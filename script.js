const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você conhece o esporte mais praticado do mundo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "daora",
                    "que bom que sabe"
                    ]
            },
            {
                texto: "não",
                afirmacao: [
                    "muito burro",
                    "lhe falta conhecimento"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "playstation ou xbox ?",
        alternativas: [
            {
                texto:"playstation",
                afirmacao: [
                    "bom gosto",
                    "melhor console"
                    ]
            },
            {
                texto: "xbox",
                afirmacao: [
                    "renasce na vida",
                    "pessimo gosto"
                    ]
            }
        ]
    },
    {
        enunciado: "futebol ou volei",
        alternativas: [
            {
                texto:"futebol",
                afirmacao: [
                    "muito bom",
                    "daora"
                    ]
            },
            {
                texto:"volei",
                afirmacao: [
                    "daora tambem",
                    "mas futebol é melhor"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio (opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
mostraPergunta();
