
var etapa = 0
var isClickedButton = false

function etapaIncrement() {
    isClickedButton = true
    if (etapa == 0 && inputNome.value.length) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'flex'
        etapa2.style.display = 'none'
        etapa3.style.display = 'none'
        isClickedButton = false
    }
    if (etapa == 1 && inputLucro.value.length) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'flex'
        etapa3.style.display = 'none'
        isClickedButton = false
    }
    if (etapa == 2 && inputmetros.value.length) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'none'
        etapa3.style.display = 'flex'
        isClickedButton = false
    }
    if (etapa == 3 && inputVacancia.value.length) {
        simular()
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'none'
        etapa3.style.display = 'none'
        etapaResultado.style.display = 'flex'
    }
}


function simular() {
    var lucro = Number(inputLucro.value)
    var areatotal = Number(inputmetros.value)
    var vacanciam2 = Number(inputVacancia.value)
    var lucrom2 = lucro / areatotal
    var prejuizo = lucrom2 * vacanciam2

    etapaResultado.innerHTML = `
    <h1>O m² do seu shopping gera aproximadamente <b>R$${lucrom2.toLocaleString()}</b>, ou seja, você está tendo um déficit, de em média <b>R$${prejuizo.toLocaleString()} por mês.</b></h1>
    <br>
    <br>
    <h2>Cadastre-se aqui e mude a realidade do seu negócio!</h2>
    <br>
    <a href='cadastro.html'><button>Cadastre-se</button></a>`
}
