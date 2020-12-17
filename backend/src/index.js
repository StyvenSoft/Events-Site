require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 4000;
require('./database');

async function main() {
    await app.listen(PORT, () => {
        console.log(`Server on port http://localhost:${PORT}`);
    });
}

main();