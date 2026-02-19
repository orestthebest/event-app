import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';


export async function load({ params }){
    let categoryId = params.id;

    const [rows] = await pool.execute('SELECT * from Categories WHERE id= ?', [categoryId]);

    if (rows.length === 0 ){
        return{
            status: 404,
            error: new Error('Event not found')
        }
    }
     return{
            category: rows[0]
     }
}


export const actions = {

    edit: async ({request, params}) => {
        const formData = await request.formData();
        const name = formData.get('name');

        const id = params.id;

        //write to database
        await pool.execute('UPDATE Categories SET name = ? WHERE id=?',
            [name, id]
        );

       redirect(303, '/admin/categories');
    }
};