import http from 'node:http'
/**
 * 
 * Rotas são meios de entradas para o ambiente. 
 * 
 * - Criar usuários
 * - Listar usuários
 * - Edição de usuários
 * - Remoção de usuários
 * 
 * Criar um usuário, enviar dados. posso fazer isso através das request e responder com response
 * 
 * HTTP
 * Método HTTP
 * URL
 * Duas coisas importantes, o método e URL
 * 
 */

//JSON - Javascript Object Notation

// Cabeçalhos (Requisições/resposta) => Metadados

const users =  []

const server = http.createServer((request, response) => {
  const {method, url } = request

  console.log(request.headers)

  if (method === 'GET' && url === '/users'){
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }
  // Stateful - Stateless
  // Early return 
  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      nome: 'John',
      sobrenome: 'Doe',
      email: 'zeCaminhoneiro@gmail.com',
      endereço: 'Rua Carlos Manoel',
      numero: 1656,
      cep: '14400-400'
    })


    return response.end('Criação de usuário')
  }

  return response.end('Helloooooo!!!')

  
})

server.listen(3333)


