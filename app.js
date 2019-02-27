const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima =  require('./clima/clima');

//let direccion = encodeURI(argv.direccion);


let getInfo = async(direccion) =>{

    try {
        
        let location = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(location.lat, location.lng);
    
        return `La tempreratura actual en ${location.direccion} es de ${temp}ºC`;
        
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then( info =>{
        console.log(info)
    })
    .catch( e => console.log(e));





/*
lugar.getLugarLatLng(direccion)
    .then( data => {
        
        //console.log('Direccion: ',data.direccion);
        //console.log('Latitud: ',data.lat);
        //console.log('Longitud: ',data.lng);
        
       let dir = data.direccion;
       let lat = data.lat;
       let lng = data.lng;

        //
        clima.getClima(lat, lng)
            .then( res =>{
                console.log(`La tempreratura actual en ${dir} es de ${res.temp}ºC`);
            } )
            .catch( e => console.log('Error: ',e))
    })
    .catch( e => console.log('Error: ',e))
    */