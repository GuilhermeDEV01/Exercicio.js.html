const form = document.getElementById('form-valid')

function validarFormulario(valorA, valorB){
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

    const valorA = document.getElementById('campoA').value;
    const valorB = document.getElementById('campoB').value;
    const mensagemSucesso = `É valido, o valor B: ${valorB} É maior que o valor A:${valorA}`;   
    
    formValid = validarFormulario(valorA, valorB)
    if (formValid) {
    alert(mensagemSucesso);
    
    valorA.value = '';
    valorB.value = '';

    } else if (valorB == valorA) {
        alert("Não é valido pois B é igual A!");
    } else {
        alert("não é valido pois A é maior que B!");
    }
})

console.log(form);
