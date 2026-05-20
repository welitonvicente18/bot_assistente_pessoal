# Bot Verônica IA

Bot Telegram em Node.js que integra uma IA local com persistência em banco de dados via Prisma.

## Visão geral

Este projeto recebe mensagens de usuários no Telegram, envia o texto para a camada de IA e grava o resultado em uma tabela `tarefa` no PostgreSQL.

## Tecnologias

- Node.js
- Telegraf
- Prisma
- PostgreSQL
- Axios
- dotenv

## Estrutura principal

- `app.js` - inicializa e lança o bot
- `src/bot/telegram.js` - configura o bot Telegraf e trata eventos de mensagens
- `src/controllers/MessageController.js` - processa mensagens recebidas e orquestra IA + banco
- `src/lib/veronicaia.js` - adaptador para envio de texto à IA
- `src/repository/prismaRepository.js` - grava dados no banco via Prisma
- `prisma/schema.prisma` - modelo Prisma
- `.env.example` - exemplo de variáveis de ambiente

## Requisitos

- Node.js 18+ (ou versão compatível com dependências do projeto)
- PostgreSQL
- Conta/configuração de bot no Telegram

## Instalação

1. Clone o repositório:

```bash
git clone <repositório> bot_veronica_ia
cd bot_veronica_ia
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` copiando o exemplo:

```bash
copy .env.example .env
```

4. Atualize o `.env` com seus valores:

- `BOT_TOKEN` - token do bot Telegram
- `IA_API_KEY` - chave de API da IA (atualmente não utilizada no código de exemplo)
- `DATABASE_URL` - string de conexão PostgreSQL

## Configuração do Prisma

1. Gere o client Prisma:

```bash
npx prisma generate
```

2. Caso ainda não tenha aplicado o schema no banco, use:

```bash
npx prisma db push
```

> O esquema atual define o modelo `tarefa` com campos `id`, `message`, `date`, `is_completed` e `createdAt`.

## Executando o bot

```bash
node app.js
```

Se tudo estiver correto, o bot deve iniciar e ficar aguardando mensagens no Telegram.

## Como usar

- Envie `/start` no Telegram para receber a resposta de saudação.
- Envie qualquer texto, e o bot encaminhará a mensagem para a IA e gravará o resultado no banco.

## Observações

- O `src/lib/veronicaia.js` atualmente retorna texto de teste local em vez de fazer chamada real para API.
- O campo `IA_API_KEY` está disponível para futura integração com serviço externo.

## Licença

Este projeto usa a licença `ISC` (conforme `package.json`).
