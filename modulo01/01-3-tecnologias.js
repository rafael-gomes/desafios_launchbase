const usuarios = [
    {
        nome: "Rafael",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jose",
        tecnologias: ["Javascript", "CSS"]
    },
    {
        nome: "Maria",
        tecnologias: ["HTML", "node.js"]
    },
    {
        nome: "Joao",
        tecnologias: ["React", "CSS"]
    }
]

for (let usuario of usuarios) {
    console.log (`${usuario.nome} trabalha com ${usuario.tecnologias}`)
    
}

// Buscar por tecnologia
function checaUsuarioCSS (usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaUsuarioCSS(usuarios[i])
    if (usuarioTrabalhaComCSS) {
        console.log (`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
