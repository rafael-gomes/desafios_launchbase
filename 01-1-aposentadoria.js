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
