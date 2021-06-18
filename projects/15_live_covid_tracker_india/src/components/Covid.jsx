import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div class="main">
        <h1>🔴 LIVE</h1>
        <h1>COVID-19 CORONAVIRUS STATS TRACKER</h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_content">
                <h2 class="card_title">OUR COUNTRY</h2>
                <p class="card_text">INDIA</p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_content">
                <h2 class="card_title">TOTAL RECOVERED</h2>
                <p class="card_text">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_content">
                <h2 class="card_title">TOTAL CONFIRMED</h2>
                <p class="card_text">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_content">
                <h2 class="card_title">TOTAL DEATHS</h2>
                <p class="card_text">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_content">
                <h2 class="card_title">TOTAL ACTIVE CASES</h2>
                <p class="card_text">{data.active}</p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_content">
                <h2 class="card_title">LAST UPDATED</h2>
                <p class="card_text">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Covid;
