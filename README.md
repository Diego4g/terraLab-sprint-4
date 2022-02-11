# Geoloc

## Sobre

Esta aplicação consiste em armazenar coordenadas com latitude, longitude e uma descrição

## Rotas da aplicação

### POST `/users`

Rota responsável por fazer o cadastro de novos funcionários da aplicação, para isso deve ser necessário fornecer os seguintes dados, como ilustrado abaixo:

```
{
    "email": "cabvigle@kegpige.gh",
    "password": "81703782",
}
```
Os usuários podem ser do tipo `commun` ou `admin`, por default, novos usuários são cadastrados como `commun`.


### DELETE `/users/:id`

Rota responsável por remover uma conta de usuário do sistema.

**Para acessar esta rota o usuário deve estar logado no sistema e ser do tipo admin**


### POST `/login`

Rota responsável por fazer o login na plataforma. Para isso deve ser informado o email e a senha do usuário.


### POST `/coordinates`

Rota responsável por fazer o cadastro de novas coordenadas, para isso deve ser necessário fornecer os seguintes dados como ilustrado abaixo:

```js
{
  "description": "descrição da coordenada", // passada pelo body
  "latitude": 123.123,                      // passado pelo query
  "longitude": 321.321,                     // passado pelo query
}
```

**Para acessar esta rota o usuário deve estar logado no sistema**


## PUT `/cordinates/:id`

Rota responsável por alterar as informações de uma coordedada.

```js
{
  "description": "alterando coordenada",    // passada pelo body
  "latitude": 123.123,                      // passado pelo body
  "longitude": 321.321,                     // passado pelo body
}
```
**Para acessar esta rota o usuário deve estar logado no sistema**

## GET `/coordinates`

Lista todos os pontos cadastrados por um determinado usuário.

**Para acessar esta rota o usuário deve estar logado no sistema**


## DELETE `/coordinates/:id`

Rota responsável por excluir uma coordenada.

**Para acessar esta rota o usuário deve estar logado no sistema**


