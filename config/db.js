const mongoose = require('mongoose');
const URL = 'mongodb://soulreaper:YOUR_PASSWORD@ds117834.mlab.com:17834/pusher';

mongoose.Promise = global.Promise;
mongoose.connect(URL,  { useNewUrlParser: true }).then(() => console.log('Connected to mongoDB')).catch(err => console.log(err));