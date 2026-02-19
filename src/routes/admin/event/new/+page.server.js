import pool from '$lib/server/database.js'
import { redirect } from '@sveltejs/kit';


export async function load() {

    const [rows] = await pool.execute('SELECT * FROM Categories');

    return {
        categories: rows
    }
}




export const actions = {

    create: async ({request}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const startdate = formData.get('startdate');
        const starttime = formData.get('starttime');
        const categoryId = formData.get('category');

        //write to database
        await pool.execute('INSERT INTO Event (name, description, startdate, starttime, category_id) VALUES (?,?,?,?,?)',
            [name, description, startdate, starttime, categoryId]
        );

       redirect(303, '/admin/events');
    }


};