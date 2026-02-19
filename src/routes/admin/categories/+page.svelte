<script>
    let {data} = $props();
</script>


<h1>Manage my categories</h1>


<a href="/admin/category/new">
 <button>Add Category</button>
</a>


<main>

    {#each data.categories as category}

    <div class ="category">


        <p>{category.name}</p>

        <div>
            <a href="/admin/category/{category.id}/edit">
                <button>Edit</button>
            </a>
        <form action="?/delete" method="POST">
            <input type="hidden" value={category.id} name="id">
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
    gap: 12px;
    max-width: 600px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .category {
    display: flex;
    justify-content: space-between;
    padding: 14px 18px;
    background: orange;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.2s ease;
  }

  .category:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .category p {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 500;
    color: #1e293b;
  }

  .category div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  button {
    padding: 7px 16px;
    border: none;
    border-radius: 7px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.1s ease;
  }

  button:active {
    transform: scale(0.97);
  }

  a button {
    background: rgb(101, 84, 61);
    color: white;
  }

  a button:hover {
    background: black;
  }

  form button {
    background: #fee2e2;
    color: #dc2626;
  }

  form button:hover {
    background: #d06969;
  }

    


</style>