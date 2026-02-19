import pool from '$lib/server/database.js'
import { redirect } from '@sveltejs/kit';


export const actions = {

    create: async ({request}) => {
        const formData = await request.formData();
        const name = formData.get('name');


        //write to database
        await pool.execute('INSERT INTO Categories (name) VALUES (?)',
            [name]
        );

       redirect(303, '/admin/categories');
    }
};