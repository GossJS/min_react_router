require('http')
.Server((r, res) => {
   const f = r.url === '/main.js' ? 'main.js' : 'index.html';
   res.writeHead(200, { 'Content-Type': 'text/html' });
   require('fs').createReadStream(f).pipe(res);
 })
.listen(process.env.PORT || 80);
