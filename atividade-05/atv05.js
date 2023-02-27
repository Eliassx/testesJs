let salario;
salario = parseFloat(prompt('Digite seu salário'));

if(salario <= 500) {
    let aumento = 30/100;
    let novoSalario;
    novoSalario = salario * (1 + aumento)

    document.getElementById('info').innerHTML = `PARABÉNS, VOCÊ RECEBERÁ UM AUMENTO!! Seu novo salário será de R$${novoSalario} .`
} else {
    document.getElementById('info').innerHTML = `Você não irá receber aumento no seu salário.`
}