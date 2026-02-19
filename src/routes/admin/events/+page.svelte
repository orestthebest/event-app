<script>

    let {data} = $props();
</script>


<h1>Manage my event</h1>


<a href="/admin/event/new">
 <button>Add Event</button>
</a>


<main>

    {#each data.events as event}

    <div class ="event">


        <p>{event.name}</p>
        <h3>{event.category_name}</h3>

        <div>
            <a href="/admin/event/{event.id}/edit">
                <button>Edit</button>
            </a>
        <form action="?/delete" method="POST">
            <input type="hidden" value={event.id} name="id">
            <button type="submit">Delete</button>
        </form>
        </div>
    </div>

    {/each}

</main>

<style>

   main {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 20px;
}

h1 {
    margin-bottom: 10px;
    color: #7a3b00;
}

a {
    text-decoration: none;
    color: inherit;
}

.event {
    background: rgba(255, 165, 0, 0.85);
    border-radius: 10px;
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 6px 18px rgba(200, 100, 0, 0.2);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.event:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(200, 100, 0, 0.35);
}

.event p {
    margin: 0;
    font-weight: 600;
    color: #4a1f00;
}

.event div {
    display: flex;
    gap: 10px;
}

button {
    border: none;
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
    font-weight: 500;
    transition: transform 0.1s ease, background 0.2s ease;
}

button:hover {
    transform: scale(1.05);
}

a button {
    background: #b85c00;
    color: white;
}

a button:hover {
    background: #8a4200;
}

form button {
    background: #ff4500;
    color: white;
}

form button:hover {
    background: #cc3700;
}

a > button:first-child {
    margin-bottom: 10px;
}

</style>