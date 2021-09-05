Essa é uma simples API para controle de Developers e contém as principais funções **(CRUD)** ♻

você pode acessar e consumir essa API pelo link:
> https://us-central1-devs-crud-alest.cloudfunctions.net/developers

## 💬 Propósito
O objetivo do projeto é construir uma API restfull conectada ao banco NoSQL Firestore...
- Utilizar uma arquitetura para o desenvolvimento
- Prática da separação de responsabilidades
- Construir e organizar as camadas da aplicação
- Tratamento de mensagens
- Deploy da aplicação com a Cloud Functions

---
## Tecnologias ⚙
- [Node.js](https://nodejs.org)
- [Firebase](https://firebase.google.com/)
- [Cloud Functions](https://cloud.google.com/functions)
- [Express](https://expressjs.com)
---
## 🧠 O projeto foi organizado em:

> **index.ts**: camada de conexão do servidor e rotas da aplicação

> **controllers**: camada de controle que se comunica diretamente com a de negócio.

> **business**: camada de negócio, onde irá conter as regras de negócio e se comunicar com o dataSource

> **datasource**: camada de comunicação com o banco de dados, <s>é onde fica a maçaroca de código</s>
---
## 🚚 Rotas
### Rota base **('/')** agrega os as funções de:
> **GET** - Listar todos os Developers

> **POST** - Cadastrar um Developer

> **PUT** - Alterar um Developer

### Rota **('/:idDeveloper')** agrega as funções de:
> **GET** - Retorna um Developer pelo ID informado

> **DELETE** - Deleta o Developer pelo ID informado

### Rota **('/filter')** agrega a função de:
> **POST** - Retorna os Developers pelo filter informado (nome)
---

## 📕 License

This project is under [MIT license](https://github.com/devscrud-api/blob/main/LICENSE)

Made by [*Júlio César*](https://github.com/juliocesarfs) 🚀
