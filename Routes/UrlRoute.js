import express from 'express';
import { shortUrl, getOriginalUrl } from '../Controllers/UrlController.js';

const router = express.Router();

// Render home page
router.get('/', (req, res) => {
  res.render('index.ejs', { shortUrl: null });
});

// Create short URL
router.post('/short', shortUrl);

// Redirect
router.get('/:shortCode', getOriginalUrl);

export default router;
