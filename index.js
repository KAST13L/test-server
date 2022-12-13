let http = require('http')
let server = http.createServer( (req, res) => {
    debugger
    console.log('some request')
    res.write(`
    <h1>Server is working</h1>
    <script>
    alert('ds')
    </script>
    `)
    res.end();
} )

server.listen(7777)