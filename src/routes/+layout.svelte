<script>
	import favicon from '$lib/assets/favicon.svg';
	import { userInfo } from 'os';
	import '../app.css';
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<p>Welcome {data.user?.username || 'Anonymous'}</p>

	{#if data.user}
	<form action="/logout?/logout" method="POST">
		<button type="submit">Logout</button>
	</form>

	{:else}
		<a href="/login">Please Login</a>
	{/if}
</header>
{@render children()}

<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:orebas19@htl-shkoder.com">Write a mail!</a>
	</div>

	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-evenly;
		padding: 30px;
		background-color: rgb(255, 135, 79);
	}
	a {
		text-decoration: none;
		color: black;
	}

	header {
		padding: 20px;
		background-color: orangered;
		display: flex;
		justify-content: space-between;
	}
</style>
