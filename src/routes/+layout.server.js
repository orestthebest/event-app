export const load = async ({ locals }) => {
	console.log('Layout data:', locals);
	return {
		user: locals.user
	};
};
