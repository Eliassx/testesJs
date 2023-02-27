let altura;
altura = parseFloat(prompt('Digite sua altura em metros'));

let peso;
peso = parseFloat(prompt('Digite seu peso em quilos'));

let imc;
imc = peso / (altura ** 2);

if(imc < 16.9) {
    document.getElementById('info').innerHTML = `Classificação: MAGREZA EXTREMA`
} else if(imc < 18.5) {
    document.getElementById('info').innerHTML = `Classificação: MAGREZA`
} else if(imc >= 18.5 && imc <= 24.9) {
    document.getElementById('info').innerHTML = `Classificação: NORMAL`
} else if(imc >= 25 && imc <= 29.9) {
    document.getElementById('info').innerHTML = `Classificação: SOBREPESO com obesidade de GRAU 1`
} else if(imc >= 30 && imc <= 39.9) {
    document.getElementById('info').innerHTML = `Classificação: OBESIDADE de GRAU 2`
} else if(imc >= 40) {
    document.getElementById('info').innerHTML = `Classificação: OBESIDADE GRAVE de GRAU 3 `
} else {
    document.getElementById('info').innerHTML = `Resposta inválida`
}