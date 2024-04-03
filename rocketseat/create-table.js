import { sql } from './db.js'

sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log('Tabela apagada')
})
// sql`
// create table videos(
//     title text,
//     description text,
//     duration integer
// );
// `.then(() => {
//     console.log('Tabela criada')
// })