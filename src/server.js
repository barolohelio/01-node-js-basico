import http from 'node:http'

// Criar um usuário, enviar dados. posso fazer isso através das request e responder com response

const server = http.createServer((request, response) => {
 return response.end('Blau Blau!!!!')
})

server.listen(3333)


