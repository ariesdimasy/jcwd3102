import { Pool } from "pg"

const pool = new Pool({
    user:"postgres",
    host:'localhost',
    password:"999999",
    database:"yudhistira_db",
    port:5432,
})

export default pool