import express from 'express';
import routes from './routes/index.js';
import db from './config/connection.js';

await db();

const PORT = process.env.PORT || 3001;
const app = express();