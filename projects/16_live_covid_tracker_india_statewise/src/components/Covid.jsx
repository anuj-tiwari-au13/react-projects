import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div class="container">
        <table class="responsive-table">
          <caption>REALTIME COVID STATS TRACKER STATEWISE</caption>
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
              <th scope="col">Active Cases</th>
              <th scope="col">Updated At</th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            {data.map((curElem, ind) => {
              return (
                <tr key={ind}>
                  <th scope="row">{curElem.state}</th>
                  <td data-title="Released">{curElem.confirmed}</td>
                  <td data-title="Studio">{curElem.recovered}</td>
                  <td data-title="Worldwide Gross">{curElem.deaths}</td>
                  <td data-title="Domestic Gross">{curElem.active}</td>
                  <td data-title="International Gross">
                    {curElem.lastupdatedtime}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Covid;
