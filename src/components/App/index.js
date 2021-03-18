// == Import npm
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import Infos from 'src/components/Infos';
import Map from 'src/components/Map';

// == Import
import './style.scss';

// == Composant
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchedIp, setSearchedIp] = useState('192.212.174.101');
  const [ip, setIp] = useState('192.212.174.101');
  const [location, setLocation] = useState("Brooklyn, NY 10001");
  const [timezone, setTimezone] = useState("UTC-05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [map, setMap] = useState();
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try{
      setLoading(true);
      const api_key = process.env.API_KEY;
      const infoIPAddress = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${searchedIp}`);
      const ispData = infoIPAddress.data.isp;
      const {city, region, country, postalCode, timezone: timezoneAPI, lat: latAPI, lng: lngAPI} = infoIPAddress.data.location;
      const locationAPI = `${city}, ${region}, ${country}, ${postalCode}`;
      const tempTimezone = `UTC${timezoneAPI}`;
      setIp(searchedIp)
      setLocation(locationAPI);
      setTimezone(tempTimezone);
      setIsp(ispData);
      setLat(latAPI);
      setLng(lngAPI);
      setLoading(false);
    } catch(error){
      console.log(error);
      setLoading(false);
    }
    
  }

  useEffect(loadData, [searchedIp]);

  //Permet de recentrer la carte sur le marqueur
  //avant cet ajout, le marqueur prenait la position de l'IP recherchée mais la carte ne suivait pas
  useEffect(() => {
    if(map && location){
      map.flyTo([lat, lng], 17, {animate: true, duration: 1.5})
    }
  }, [map, lat, lng]);

  const onMapCreated = (map) => {
    setMap(map);
  }

  const onFormSubmit = () => {
    setSearchedIp(inputValue);
  }

  const onChangeinputValue = (value) => {
    setInputValue(value);
  }

  return (
    <div className="app">
      {!loading &&
      (
      <>
        <header className="header">
            <h1 className="header__title">IP Address Tracker</h1>
            <Header onChangeInputValue={onChangeinputValue} value={inputValue} onFormSubmit={onFormSubmit} />
            <Infos location={location} timezone={timezone} isp={isp} ip={ip} />
        </header>
        <Map lat={lat} lng={lng} onMapCreated={onMapCreated} />
      </>
      )}
    </div>
  );
}

// == Export
export default App;
