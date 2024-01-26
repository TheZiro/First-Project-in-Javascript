let numerosecreto = numerorandom();
let tentativas = 1;
console.log(numerosecreto);

function texto(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial() {
    texto("h1", "Jogo do Numero Secreto");
    texto("p", "Selecioner um Número de 1 a 100");
 
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numerosecreto) {
        texto("h1", "Você Acertou!!");
        let palavrasTentativas = tentativas > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentativas = `Você Descobriu o Número Secreto com ${tentativas} ${palavrasTentativas}`;
        texto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (chute > numerosecreto) {
            texto("p", "O número secreto é Menor");
        } else {
            texto("p", "O Número Secreto é Maior");
        }
        tentativas++;
        limparCampo();
    }
}

function numerorandom() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numerosecreto = numerorandom();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}