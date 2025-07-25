const { usuarios, perfis } = require('../../data/db')

module.exports = {
    hello: () => 'Olá, mundo!',
    horaAtual: () => {
        return new Date
    },
    usuarioLogado: (obj) => { 
        console.log('Lendo objeto: ' + obj)
        return {
            id: 1,
            nome: 'João',
            email: 'teste@teste.com',
            idade: 30,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque: () => {
        return {
            nome: 'Notebook',
            preco: 4000,
            desconto: 0.5
        }
    },
    numerosMegaSena: () => {
        const crescente = (a, b) => a - b
        const numeros = []
        while (numeros.length < 6) {
            const n = Math.floor(Math.random() * 60) + 1
            if (!numeros.includes(n)) {
                numeros.push(n)
            }
        }
        return numeros.sort(crescente)
    },
    usuarios: () => {
        return usuarios
    },
    usuario(_, args) {
        const selecionados = usuarios.filter(u => u.id === args.id)
        return selecionados ? selecionados[0] : null
    },
    perfis: () => {
        return perfis
    },
    perfil(_, {id}) {
        const selecionados = perfis.filter(p => p.id === id)
        return selecionados ? selecionados[0] : null
    }
    
}