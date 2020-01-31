import lugar = require('./lugar/lugat');
import clima = require('./clima/clima');

const exp = require('express');
const _ = require('underscore');


const appTemp = exp();


appTemp.get('/temperatura/', async function(req:any, res:any) {

    // const city = req.params.city;
    const body:any = _.pick( req.body, ['city']);
    let coordError:string;

    try{
        
        const coord = await lugar.getLugarLatLog(body.city);

        if(coord.err != undefined){
            res.json({
                ok: false,
                ciudad: body.city,
                error: coord.err
            })
        } else {
            const temp:number = await clima.getClima(coord.lat, coord.lng);
            
            if( coord.err == undefined ){
                res.json({
                    ok: true,
                    ciudad: body.city,
                    temperatura: Math.round(temp)
                })
            }
        }
        
    }
    catch( err ){
        res.json({
            ok: false,
            ciudad: body.city,
            error: err
        })
    }

});


module.exports = appTemp;