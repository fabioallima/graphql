let id = 1
function proximoId() {
    return id++
}

const usuarios = [
    { id: proximoId(), nome: 'João', email: 'joao@teste.com', idade: 30, perfil_id: 1, status: 'ATIVO' },
    { id: proximoId(), nome: 'Maria', email: 'maria@teste.com', idade: 25, perfil_id: 2, status: 'INATIVO' },
    { id: proximoId(), nome: 'José', email: 'jose@teste.com', idade: 40, perfil_id: 1, status: 'BLOQUEADO' },]

const perfis = [
    {id: 1, nome: 'Comum'},
    {id: 2, nome: 'Administrador'}
]

module.exports = { usuarios, perfis, proximoId }