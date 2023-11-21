import { useState, useEffect } from 'react'
import Server from '../Server'
import axios from 'axios'

const Home = () => {
  const api = 'http://saps4qas.shyamgroupcloud.com:8001/sap/opu/odata/sap/ZRFIDN_API_GATEPASSPOH_SRV/GATEPASSPOHSet?$format=json'
  // var username = 'SG_API01';
  // var password = 'Sap@12345678';
  // var credentials = btoa(username + ':' + password);
  // var basicAuth = 'Basic ' + credentials;
  
  const getapi = async () => {
    const response = await axios.get(api, {
      // mode: 'cors',
      withCredentials: true,
      auth: {
        username: 'SG_API01',
        password: 'Sap@12345678',
      },
      headers: {
        // "HTTP/1.1 200" : 'OK',
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Access-Control-Allow-Origin" : "*",
        'Access-Control-Allow-Credentials': true,
      }
    });
    const data = await response.data
    console.log(data);
    // try {
    //   const response = await axios.get(api, {
    //     // mode: 'cors',
    //     withCredentials: true,
    //     auth: {
    //       username: 'SG_API01',
    //       password: 'Sap@12345678',
    //     },
    //     headers: {
    //       "HTTP/1.1 200" : 'OK',
    //       "Content-Type" : "application/json",
    //       "Accept" : "application/json",
    //       "Access-Control-Allow-Origin" : "*",
    //       'Access-Control-Allow-Credentials': true,
    //     }
    //   });
    //   const data = await response.data
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  useEffect(() => {
    getapi()
  }, [])

  return (
    <>
      <div>Home</div>
    </>
  )
}

export default Home