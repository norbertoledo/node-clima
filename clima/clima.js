const axios = require('axios');



const getClima = async (lat, lng) =>{

    const API_KEY = 'eb606ff327e9d39b3d28ffccafa60682';    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=`;

    let resp = await axios.get(`${URL}${API_KEY}`);

    let temp = resp.data.main.temp;

    return temp;
}

module.exports = {
    getClima
}