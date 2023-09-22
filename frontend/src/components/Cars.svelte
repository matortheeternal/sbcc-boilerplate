<script>
    export let cars;
</script>

<section>
    <ul>
        {#each cars.slice(0, 10) as car}
            <li>{car.make} {car.model}</li>
        {/each}
    </ul>
</section>

<style>
    ul {
        list-style-type: none;
    }

    li {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 5px;
    }
</style>
