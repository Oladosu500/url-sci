import React, { useState } from "react";

interface UrlShortenerProps {}

const UrlShortener: React.FC<UrlShortenerProps> = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleUrlShorten = () => {
    // TODO: Implement the logic to send a request to the server and generate a shorter URL
    // You can use libraries like axios to make the API request

    // For demonstration purposes, we'll just set a random shorter URL
    const randomShortUrl = Math.random().toString(36).substring(7);
    setShortUrl(randomShortUrl);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Paste your long URL here"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button onClick={handleUrlShorten}>Shorten</button>
      {shortUrl && (
        <div>
          <h3>Shortened URL:</h3>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;