import Data from './app.js'
import * as tempo from './app.js'

console.log('tempo' + tempo)

tempo.ore = 23  //N.B. non si può riassegnare ma solo leggere!
console.log(tempo.giorni)  //questo si può fare (solo LETTURA)

//posso anche creare una variabile di tipo Data (importata dal file 'app.ts')
const data: Data = new Data()
