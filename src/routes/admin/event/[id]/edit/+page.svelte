<script>
    let {data} = $props();
</script>


<h1>Edit Event</h1>

<form action="?/edit" method="POST"></form>


<form method= "POST" action="?/edit">

    <div>
        <label for="name">Event name</label>
        <input type="text" id="name" name="name" required value={data.event.name}>

    </div>

    <div>
        <label for="description">Event description</label>
        <textarea name="description" id="description" required value={data.event.description}></textarea>
    </div>


     <div>
        <label for="startdate">Event start date</label>
        <input type="date" id="startdate" name="startdate" required value={data.event.startdate.toISOString().substring(0,10)}>
    </div>


    <div>
        <label for="starttime">Event start </label>
        <input type="time" id="starttime" name="starttime"required value={data.event.starttime ? data.event.starttime.slice(0, 5) : '' }>
    </div>


    <div>
        <button type="submit">Update event</button>
    </div>

</form>

