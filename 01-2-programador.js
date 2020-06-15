const programador = {
    nome: "Rafael",
    idade: 33,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Javascript",
            especialidade: "Web"
        }
    ]
}

console.log(`O usuário  ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)
