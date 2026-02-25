import pool from '$lib/server/database.js';

export async function GET(){
    const [rows]= await pool.query('SELECT * from Event');
    return Response.json(rows);
}

export async function POST({request}) {

    const { name, description, startdate } = await request.json();
    
    const [result] = await pool.query('INSERT INTO Event (name, description, startdate) VALUES (?, ?, ?)', [name, description, startdate])

    return Response.json({"message": "Event created"}, {status: 201});
}