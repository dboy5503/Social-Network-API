import express from 'express';
import routes from './routes/index.js';
import db from './config/connection.js';
await db();
const PORT = process.env.PORT || 3103;
const app = express();
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
