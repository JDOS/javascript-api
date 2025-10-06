const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('videos.json');
const middlewares = jsonServer.defaults();

// Habilita CORS para todas as origens
server.use(cors({
  origin: '*',
  credentials: true
}));

server.use(middlewares);
server.use(router);

server.listen(3000, '0.0.0.0', () => {
  console.log('JSON Server rodando na porta 3000 com CORS habilitado');
});