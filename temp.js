const axios = require('axios')

function poll(){
    axios.get('http://localhost:55555/captions').then(res => {
        document.getElementById('p').innerHTML = res.data.join(' ')
        setTimeout(poll, 5)
    })
}

poll()