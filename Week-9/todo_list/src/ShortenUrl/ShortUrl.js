import React, { useState } from "react";
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
          <Button
            variant="primary"
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </Button>
          <div className=" mt-2">
            <label className="border mx-2">{shortenedLink}</label>
            <CopyToClipboard text={shortenedLink}>
              <Button variant="primary">Copy URL</Button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortUrl;
