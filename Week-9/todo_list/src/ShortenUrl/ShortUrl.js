import React, { useState, useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import Button from "react-bootstrap/Button";

const ShortUrl = () => {
  const [shortenedLink, setShortenedLink] = useState(""); // states
  const [userInput, setUserInput] = useState("");


  // on submit url calls this function
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`  // query params sending
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  //using the useMemo hook to memoize the result of the fetchData function, which is the shortened URL. The fetchData function is called every time the userInput state changes, and its result is memoized using useMemo
  const handleCopy = useMemo(() => {
    return fetchData();
  }, [userInput]);
  return (
    <div>
      <h1>Short-end Url</h1>
      <div className=" text-center">
        <h1>URL Shortener</h1>
        <div>
          <input
            className="mx-2"
            type="text"
            placeholder="Enter link to be shortened"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          { shortenedLink &&
          <div className=" mt-2">
            <label className="border mx-2">{shortenedLink}</label>
            <CopyToClipboard text={shortenedLink}>
              <Button variant="primary">Copy URL</Button>
            </CopyToClipboard>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ShortUrl;
