import React, { useState, useEffect } from "react";
import "../index.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=00a81f2bee5fa98eb421638ae616ea1f`;
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
              </h2>
              {/* alt+248 gives degree sign */}
              <h1 className="temp">{city.temp}°C </h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C | {city.temp_max}°C
              </h3>
            </div>

            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
