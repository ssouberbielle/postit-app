require('dotenv').config();

const { get } = require('mongoose');
const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();