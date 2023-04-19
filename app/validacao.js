function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    const body = document.querySelector('body')

    if (chute === 'game over'){
        document.body.innerHTML = `
        <h2>GAME OVER!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente" class="btn-jogar-novamente">Jogar Novamente</button>
    `
    setTimeout(() => {
        body.style.backgroundColor = '#0B2447'
        body.style.color = '#A5D7E8'
        reiniciarPagina();
    }, 500);
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogarNovamente" class="btn-jogar-novamente">Jogar Novamente</button>
        `
        reiniciarPagina();
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function reiniciarPagina(){
    const jogarNovamente = document.querySelector('#jogarNovamente')

    jogarNovamente.addEventListener('click', function () {
        location.reload()
    })
}
