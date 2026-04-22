<script>
	let { form } = $props();
</script>

<h1>Register</h1>

<h1>Login-Page</h1>

{#if form?.error}
	<p id="warning">
		{form.error}
	</p>
{/if}

<section>
	<form action="?/register" method="POST">
		<div>
			<label for="username">username</label>
			<input type="text" name="username" id="username" />
		</div>

		<div>
			<label for="password"> Password </label>
			<input type="password" name="password" id="password" />
		</div>

		<div>
			<button type="submit"> Register</button>
		</div>

		<a href="/register">Register</a>
	</form>
</section>

<style>
	#warning {
		border: 1px solid red;
		background-color: #ffaea3;
		padding: 25px;
		margin: 10px;
	}
</style>
