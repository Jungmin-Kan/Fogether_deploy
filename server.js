const express = require('express')
const vhost = require('vhost')
const next = require('next')
var requestIp = require('request-ip');

const dev = process.env.NODE_ENV !== 'production'
// const dev = true
// const hostname = 'localhost'
const hostname = 'foogether.site'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  server.use(requestIp.mw());
  
  server.get('/api/counter', (req, res) => {
    console.log('/api/counter');
    return res.json({name : '54321'});
  })

  server.get('/', (req, res) => {
    const ip = req.clientIp;
    console.log("client IP: " + requestIp.getClientIp(req));
    return app.render(req, res, '/');
  });
  
  server.get('*', (req, res) => { return handle(req, res) });
  server.listen(port, (err, res) => { if (err) throw err })
}).catch((e) => { console.error(e); })