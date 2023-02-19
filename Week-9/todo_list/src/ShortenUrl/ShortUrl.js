import React, { useState, useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import Button from "react-bootstrap/Button";

const ShortUrl = () => {
  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      if (response.data.ok) {
        setShortenedLink(response.data.result.full_short_link);
      }
    } catch (e) {
      alert(e.response.data.error);
      setShortenedLink(null);
      console.log(e);
    }
  };

  // The useMemo hook has been used to memoize the submitUrl function. 
  //This is because submitUrl only needs to be re-computed when the userInput state changes. By memoizing the function, we can avoid unnecessary re-renders of the component.
  const submitUrl = useMemo(
    () => {
      return () => {
        if (userInput !== "") {
          fetchData();
        }
      };
    },
    [userInput]
  );

  return (
    <div>
      <h1>Short-end Url</h1>
      <div className="text-center">
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
          <Button variant="primary" onClick={submitUrl}>
            Submit URL
          </Button>
          {shortenedLink && (
            <div className="mt-2">
              <label className="border mx-2">{shortenedLink}</label>
              <CopyToClipboard text={shortenedLink}>
                <Button variant="primary">Copy URL</Button>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortUrl;