import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';


export async function load({ params }){
    let eventId = params.id;

    const [rows] = await pool.execute('SELECT * from Event WHERE id= ?', [eventId]);

    if (rows.length === 0 ){
        return{
            status: 404,
            error: new Error('Event not found')
        }
    }
     return{
            event: rows[0]
     }
}


export const actions = {

    edit: async ({request, params}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const startdate = formData.get('startdate');
        const starttime = formData.get('starttime');
        const id = params.id;

        //write to database
        await pool.execute('UPDATE Event SET name = ?, description = ?, startdate = ?, starttime = ? WHERE id = ?',
            [name, description, startdate, starttime, id]
        );

       redirect(303, '/admin/events');
    }
};