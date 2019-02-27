
const argv = require('yargs')
    .options(
        {
            direccion: {
                demand: true,
                alias: 'd',
                desc: 'Ciudad de la cual se quiere obtener el clima'

            }
        }
    )
    .help()
    .argv;

module.exports= {
    argv
}
