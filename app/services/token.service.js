const axios = require("axios").default;
const qs = require("querystring");
 
const config = {
   headers: {
       "Content-Type": "application/x-www-form-urlencoded",
   },
};
 
let token = "";
 
const getToken = async() => {
   let token;
   const promise = await axios
       .post(
           "https://accounts.spotify.com/api/token",
           qs.stringify({
               grant_type: "client_credentials",
               client_id: "8d73a0e5b4144644897a20154ca8c2fd",
               client_secret: "8d4e55200bee4e5c8dfcceff699cb36f",
           }),
           config
       )
   token = promise.data;
   return token.access_token;
}
 
module.exports = getToken;
