const axios = require('axios')

axios.post('http://localhost:23708/voiceControl/speak', {message: 'This is a test message. You can see that the captions are coming in OBS. Now if a wait a while...'})
setTimeout(() => {
    axios.post('http://localhost:23708/voiceControl/speak', {message: 'You can see that it automatically erases!'})
}, 3000);