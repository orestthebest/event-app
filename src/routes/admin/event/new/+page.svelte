<script>
    let { data}  = $props();
    console.log(data.categories);
</script>


<h1>New Event</h1>

<form method= "POST" action="?/create">

    <div>
        <label for="name">Event name</label>
        <input type="text" id="name" name="name" required>

    </div>

    <div>
        <label for="description">Event description</label>
        <textarea name="description" id="description"></textarea>
    </div>


     <div>
        <label for="startdate">Event start date</label>
        <input type="date" id="startdate" name="startdate">
    </div>


    <div>
        <label for="startdate">Event start date</label>
        <input type="time" id="starttime" name="starttime">
    </div>


  <div>
        <label for="category">Category:</label>
        <select id="category" name="category_id" required>
            {#each data.categories as category}
                <option value={category.id}>
                    {category.name}
                </option>
            {/each}
        </select>
    </div>
 
    <div>
        <button type="submit">Create Event</button>
    </div>
</form>
 