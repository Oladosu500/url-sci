import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { originalUrl, customUrl } = req.body;
    // Perform URL shortening logic and database storage here
    // You can use libraries like nanoid or shortid to generate unique short URLs
    // Store the mapping of short URLs and original URLs in a database

    // Generate a unique short URL using nanoid
    const shortUrlId = customUrl || nanoid(); // If customUrl is provided, use it, otherwise generate a new ID
    const baseUrl = 'https://shorten-rest.p.rapidapi.com/aliases'; // Replace with your own base URL
    const shortUrl = `${baseUrl}/${shortUrlId}`;
    res.status(200).json({ shortUrl });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
