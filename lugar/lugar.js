const axios = require('axios');


// MAPBOX GEOLOCATION
const getLugarLatLng = async(direccion)=>{

    const API_KEY ='pk.eyJ1Ijoibm9yYmVydG9sZWRvIiwiYSI6ImNqc21hamdqYzA2djgzenFmeXR1aWNmejcifQ.yk1TGQbU8FZnROHw3T2vEw';
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${direccion}.json?access_token=`;


    let respuesta = await axios.get(`${URL}${API_KEY}`)

    if(respuesta.data.features.length===0){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    // Para ver en consola los datos de respuesta en formato JSON
    //console.log(JSON.stringify(respuesta.data, undefined, 2));

    let dir = respuesta.data.features[0].place_name;
    let lat = respuesta.data.features[0].geometry.coordinates[1];
    let lng = respuesta.data.features[0].geometry.coordinates[0];
 

    return {
        direccion: dir,
        lat,
        lng
    }
}





module.exports = {
    getLugarLatLng
}