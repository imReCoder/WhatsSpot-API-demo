const axios = require("axios");
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRJZCI6IjYyNmZhMzgzNmE2MmZiMmVmZDRlODEwMSIsInVzZXJJZCI6IjYyNmZhMzgzNmE2MmZiMmVmZDRlODEwMiIsImRldmljZUlkIjoiNjI2ZmEzYjA2YTYyZmIyZWZkNGU4MTAzIiwiaWF0IjoxNjUyMDcyNzQxfQ.tH6o8YOF2EV3tLy19OnG4KjsGLH-6CA_b2YKOcMZsqs";
const whatsSpotURL = "https://api.whatsspot.in/api";

const sendTextMessage = async()=>{
  let body = {
    numbers:"+911234567890", //Ex: +909878976545,+429894534567,9234387658,
    message:{
      text:"Hey sending message using WhatsSpot API"
    }
  };
  
 let options = {
  headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${API_KEY}`
  }
 };
  const res = await axios.post(`${whatsSpotURL}/message/text`,body,options);
  console.log("Message sent ==>",res.data);
}

sendTextMessage();
