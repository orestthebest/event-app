<script>
    let { data } = $props()
</script>

<h1>Events in Shkodra</h1>

<main>
    {#each data.events as event }
        <a href={"/event/" + event.id}>
         <h2>{event.name}</h2>
         <h2>{event.description}</h2>
         <p>{event.category_name}</p>
        </a>
    {/each}
</main>