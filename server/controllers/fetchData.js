const axios = require('axios');
require('dotenv').config();

module.exports = async(input)=>{
    const response = await axios(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.GOOGLE_API_KEY}`);
    const results = response.data.predictions;
    console.log(process.env.GOOGLE_API_KEY);
    console.log('here');
    console.log(results);
    const array =  results.map(result=>{
      return result.description;
    });
    return array;
};