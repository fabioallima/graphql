// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// Tenta carregar o arquivo .env se existir
try {
  require('dotenv').config();
} catch (error) {
  console.log('Arquivo .env não encontrado, usando configurações padrão');
}

// Configuração de conexão com fallback para valores padrão
const connection = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'graphql_db'
};

module.exports = {
  client: 'mysql2',
  connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
