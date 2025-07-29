# Projeto GraphQL

## Configuração do Banco de Dados

Para configurar a conexão com o banco de dados, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configurações do Banco de Dados MySQL
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=graphql_db
```

### Variáveis de Ambiente:

- `DB_HOST`: Host do banco de dados (padrão: localhost)
- `DB_USER`: Usuário do banco de dados (padrão: root)
- `DB_PASSWORD`: Senha do banco de dados (padrão: vazio)
- `DB_NAME`: Nome do banco de dados (padrão: graphql_db)

Se o arquivo `.env` não existir, o sistema usará os valores padrão configurados.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
``` 