const db = require('../config/db')

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@empresa.com.br',
    senha: '12345678'
}

async function update() {
    //count
    const {qtd} = await db('usuarios')
        .count('* as qtd').first()
    
    //insert
    if (qtd === 0){
        await db('usuarios').insert(novoUsuario)
    }

    //select
    let {id} = await db('usuarios')
        .select('id').limit(1).first()

    //update
    await db('usuarios').where({id: id})
        .update({nome: 'Pedro Garcia'})
    
    return await db('usuarios').where({id})
}

update()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())