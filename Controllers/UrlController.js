import { Url } from '../Models/UrlModel.js';
import shortid from 'shortid';

// Create short URL
export const shortUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).send('URL is required');
    }

    const shortCode = shortid.generate();
    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    const newUrl = new Url({
      shortCode,
      longUrl
    });

    await newUrl.save();

    res.render('index.ejs', { shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Redirect to original URL
export const getOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const originalUrl = await Url.findOne({ shortCode });

    if (!originalUrl) {
      return res.status(404).send('URL not found');
    }

    res.redirect(originalUrl.longUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
