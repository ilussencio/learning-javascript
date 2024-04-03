import postgres from 'postgres'
import 'dotenv/config'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env
const url = `postgress://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
console.log(url)
export const sql = postgres(url, {ssl: 'require'})