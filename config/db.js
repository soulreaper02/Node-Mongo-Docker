const mongoose = require('mongoose');
const URL = 'mongodb://soulreaper:1q2w3e4r5t@ds117834.mlab.com:17834/pusher';

mongoose.Promise = global.Promise;
mongoose.connect(URL,  { useNewUrlParser: true }).then(() => console.log('Connected to mongoDB')).catch(err => console.log(err));