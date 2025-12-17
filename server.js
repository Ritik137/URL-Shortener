import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import urlRoutes from './Routes/UrlRoute.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', urlRoutes);

// Server
const PORT = process.env.PORT || 1002;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
