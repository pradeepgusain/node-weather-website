const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0d613bd83ef4c1968d06fad5df7595cb&query='+ latitude + ',' + longitude + '&units=f';

    request({ url, json: true}, (error, { body }) =>{
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(body.error){
            callback('Unable to find the location', undefined);
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' It feels like ' + body.current.feelslike )
        }
    })
}


module.exports = forecast;