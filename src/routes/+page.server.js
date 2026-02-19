import pool from '$lib/server/database.js'


export async function load(){
    const [rows]= await pool.execute('SELECT e.id as id, c.name as category_name, e.name as name from Event e LEFT JOIN Categories c ON e.category_id = c.id')
    
    return {
        events: rows
    }  

};