const express = require('express')
const app = express()
const fs = require('fs')
let captions = []
let lastUpdated = 0
let banner = `<html>
<head>
    <title>
        Captions
    </title>
</head>
<body class="body" style="text-align: center;">
    <p class="text" id="p" style="position: absolute; bottom: 0; left: 0; right: 0; margin-left: auto; margin-right: auto; display: inline; padding-left: 10px; padding-right: 10px; background-color: rgba(255, 0, 0, 0.75); color: white; font-size: 50pt; font-family: 'Casual'; color: Cyan;"></p></div>
</body>
<style>
    @font-face {
        font-family: 'Casual';
        src: url('Casual-Regular.ttf');
    }
</style>
<script>
${fs.readFileSync('bundle.js')}
</script>
</html>`
app.listen(55555)
app.use(express.text())
app.use(express.static('fonts'))

app.get('/', (req, resp) => {
    resp.send(banner)
})

app.post('/captions', (req, resp) => {
    captions.push(JSON.parse(req.body).transcript)
    lastUpdated = Date.now()
    resp.send('Hey thanks!')
})

app.get('/captions', (req, resp) => {
    resp.send(captions)
})

function check() {
    if (Date.now() - lastUpdated > 2000) {
        captions = []
    }
    setTimeout(check, 100)
}
check()
