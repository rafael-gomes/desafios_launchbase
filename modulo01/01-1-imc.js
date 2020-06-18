// Cálculo IMC

const nome = 'Rafael'
const peso = 72
const altura = 1.78

const imc = peso / (altura * altura)

if (imc >= 30 ){
    console.log(`${nome}, seu imc é ${imc} e você está acima do peso.`)
} else {
    console.log(`${nome}, seu imc é ${imc} e você não está acima do peso.`)
}
