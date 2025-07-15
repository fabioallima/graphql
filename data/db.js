const usuarios = [
    { id: 1, nome: 'João', email: 'joao@teste.com', idade: 30, perfil_id: 1, status: 'ATIVO' },
    { id: 2, nome: 'Maria', email: 'maria@teste.com', idade: 25, perfil_id: 2, status: 'INATIVO' },
    { id: 3, nome: 'José', email: 'jose@teste.com', idade: 40, perfil_id: 1, status: 'BLOQUEADO' },]

const perfis = [
    {id: 1, nome: 'Comum'},
    {id: 2, nome: 'Administrador'}
]

module.exports = { usuarios, perfis }