# doc-openai

## Descrição

**doc-openai** é um projeto baseado em NestJS, uma estrutura progressiva para a construção de aplicativos do lado do servidor em Node.js. Este aplicativo particular utiliza os serviços da OpenAI para gerar automaticamente documentações detalhadas para projetos Java Spring Boot, analisando a estrutura do projeto fornecido.

## Funcionalidades

- Geração automática de documentação para projetos Java Spring Boot.
- Integração com a API da OpenAI para processamento de linguagem natural.
- Estrutura modular e testável, aproveitando o poder do NestJS.

## Estrutura do Projeto

- **src/controller**: Contém os controladores que lidam com as requisições HTTP.
- **src/modules**: Módulos que organizam o projeto em partes distintas e reutilizáveis.
- **src/services**: Serviços que encapsulam a lógica de negócios principal, como a interação com a API da OpenAI.
- **test**: Testes unitários e de integração para garantir o correto funcionamento da aplicação.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- NestJS CLI
- Conta e chave de API da OpenAI

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd doc-openai
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e configure a variável `OPENAI_API_KEY` com sua chave de API da OpenAI:

```
OPENAI_API_KEY=your_api_key_here
PORT=3000
```

## Execução

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Testes

Para executar os testes unitários:

```bash
npm run test
```

Para executar os testes de integração:

```bash
npm run test:e2e
```

## Scripts Disponíveis

- `build`: Compila o projeto.
- `start`: Inicia o servidor.
- `start:dev`: Inicia o servidor em modo de desenvolvimento.
- `start:prod`: Inicia o servidor em modo de produção.
- `lint`: Executa o ESLint para verificar a conformidade do código.
- `test`: Executa todos os testes.
- `test:watch`: Executa os testes no modo de observação.
- `test:cov`: Executa os testes e gera um relatório de cobertura.

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma _issue_ ou envie um _pull request_ para melhorias ou correções.

## Licença

Este projeto não possui uma licença específica e é restrito para uso privado.

Este arquivo `README.md` fornece uma visão geral do projeto, suas funcionalidades, estrutura, requisitos, instruções de instalação, configuração, execução, testes e contribuição. Certifique-se de substituir `<URL_DO_REPOSITORIO>` com a URL real do repositório, caso deseje compartilhar o projeto.
