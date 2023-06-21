import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/users";
      axios.get(url).then((res) => setData(res.data));
    } catch (error) {}
  };

  const search = (e) => {
    setSearchData(e);
    if (e === "") {
      fetch();
    }
  };

  useCallback(() => {
    setTimeout(() => {
      const temp = data.filter((item) => item.name.includes(searchData));
      setData(temp);
    }, 1000);
  }, [searchData]);

  return (
    <div>
      test
      <input id="search" onChange={(e) => search(e.target.value)} />
      {data.map((item) => {
        return (
          <>
            <ul>
              <li key={item.id}>{item.name}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Test;
