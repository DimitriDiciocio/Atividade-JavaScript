function media(){
    var soma = 0;
    for (var i = 0; i < 3; i++) {
        var numero = parseInt(prompt("Insira um número"));
        soma += numero
    }
    var media = soma / 3;
    alert("A média é: " + media);
}

function calc(){
    var soma
    var mult
    var sub
    var div
    var num1 = parseInt(prompt("Digite um numero"))
    var num2 = parseInt(prompt("Digite um numero"))
    soma = num1 + num2
    mult = num1 * num2
    sub = num1 - num2
    div = num1  / num2
    alert("A soma é "+ soma)
    alert("A subtração é "+ sub)
    alert("A multiplicação é "+ mult)
    alert("A divisão é "+ div)
}

function conversorMoeda() {
    var num1 = parseInt(prompt("Digite um numero"))
    num1 /= 5
    alert(num1)
}

function conversorIdade() {
    var num1 = parseInt(prompt("Digite um numero"))
    num1 *= 12
    alert(num1)
}

function quadrado() {
    var num1 = parseInt(prompt("Digite um numero"))
    num1 *= num1
    alert(num1)
}

function tempoEmSegundos() {
    var num1 = parseInt(prompt("Digite um numero"))
    num1 *= 3600
    alert(num1)
}

function imposto() {
    var num1 = parseFloat(prompt("Digite um numero"))
    taxa = num1/100*15
    num1 = num1 + taxa
    alert(num1)
}

function desconto() {
    var num1 = parseFloat(prompt("Digite um numero"))
    var taxa = parseFloat(prompt("Digite um numero"))
    var taxaReal = num1/100*taxa
    num1 = num1 - taxaReal
    alert(num1)
}

function kmToMiles() {
    var num1 = parseFloat(prompt("Digite um numero"))
    const miles = 0.621371
    num1 = num1 * miles
    alert(num1)
}

function minutesToHoursAndMinutes() {
    var num1 = parseFloat(prompt("Digite um numero"))
    var num2
    num2 = (num1 % 60)
    num1 = num1 / 60
    num1 = parseInt(num1)
    alert(num1 + "Horas e " + num2 + " Minutos")
}