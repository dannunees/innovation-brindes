# Innovation Brindes

## Descrição

Este é um desafio técnico desenvolvido para a empresa **Innovation Brindes**. A aplicação é construída com **React** e **Next.js**, utilizando tecnologias modernas para oferecer uma experiência de usuário eficiente e interativa.

## Funcionalidades

- **Sistema de Login**: O usuário pode autenticar-se na aplicação.
- **Gerenciamento de Autenticação**: As credenciais do usuário são gerenciadas, incluindo o armazenamento do perfil, informações e token de acesso.
- **Tela de Listagem de Produtos**: Após o login, o usuário é direcionado para uma tela onde pode visualizar os produtos disponíveis.
- **Informações do Usuário**: No cabeçalho da página, são exibidas informações do usuário, como:
  - Nome
  - Setor
  - Data atual (dia, mês, ano)
  - Horário atualizado em tempo real
- **Filtros de Pesquisa**: Os usuários podem filtrar os produtos por nome e código do produto.

## Tecnologias Utilizadas

- React
- Next.js
- Chakra UI
- Axios
- Framer Motion
- React Hook Form
- React Query
- React Toastify
- Jest

## Dependências

- `@chakra-ui/react`: ^2.4.8
- `axios`: ^1.7.9
- `framer-motion`: ^6
- `next`: ^13.1.1
- `react`: 18.2.0
- `react-dom`: 18.2.0
- `react-hook-form`: ^7.54.2
- `react-query`: ^3.39.3
- `react-toastify`: ^11.0.3

## Scripts

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Gera os arquivos de produção.
- `start`: Inicia a aplicação em modo produção.
- `lint`: Executa o ESLint no código fonte.
- `postinstall`: Instala o Husky após a instalação das dependências.
- `prepare`: Prepara o Husky para uso.
- `typecheck`: Realiza a verificação de tipos com TypeScript.

## Instalação e Execução

### 1. Clonar o repositório

```sh
 git clone https://github.com/seu-usuario/innovation-gifts.git
 cd innovation-gifts
```

### 2. Rodar a aplicação com Docker

Certifique-se de ter o **Docker** instalado em sua máquina.

```sh
docker compose up --build
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### 3. Configuração do Ambiente

A URL da API de homologação já está configurada no `docker-compose.yml`, então não é necessário criar um `.env` manualmente. Caso precise alterar a URL da API, edite o arquivo `docker-compose.yml`

### 4. Parar o container

Para interromper a execução do container, use:

```sh
docker compose down
```

Caso queira rodar o container em segundo plano:

```sh
docker compose up -d --build
```
