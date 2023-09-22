<script>
    import { onMount } from 'svelte';
    import sbccLogo from './assets/sbcc.svg';
    import Cars from './components/Cars.svelte';

    let carsList;

    onMount(async () => {
        console.log('test');
        const response = await fetch('http://localhost:4000/api/v1/cars');
        console.log(response);
        const { cars } = await response.json();

        carsList = cars;
        console.log(carsList);
    });
</script>

<main>
    <div>
        <img src={sbccLogo} class="logo" alt="SBCC Logo" />
    </div>
    <h1>SBCC Boilerplate</h1>

    {#if carsList}
        <div class="card">
            <Cars cars={carsList} />
        </div>
    {/if}
</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
</style>
