<script>
    let { children } = $props();
</script>

<header>
   <h1> Admin Dashboard</h1> 
</header>

{@render children ()}

<style>
    header{
        background-color: rgb(255, 191, 0);
    }
</style>