// Cálculo IMC

// const nome = 'Rafael'
// const peso = 72
// const altura = 1.78

// const imc = peso / (altura * altura)

// if (imc >= 30 ){
//     console.log(`${nome}, seu imc é ${imc} e você está acima do peso.`)
// } else {
//     console.log(`${nome}, seu imc é ${imc} e você não está acima do peso.`)
// }

// Cálculo da aposentadoria

const nome = 'Rafael'
const sexo = 'M'
const idade =  70
const contribuicao = 25

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
const calculoAposentadoria = idade + contribuicao

if (sexo === 'M'){
    if (calculoAposentadoria >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
} else {
    if (calculoAposentadoria >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

