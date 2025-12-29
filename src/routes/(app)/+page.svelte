<!-- HOMEPAGE -->
<script lang="ts">
    import Header from '$components/AppHeader.svelte';
    import Home from '$src/lib/components/AppMain.svelte';
    import Footer from '$components/AppFooter.svelte';

    export let data: {
        home1Html: string;
        home2Html: string;
        home3Html: string;
    };
</script>

<main class="home">

    <!-- HEAD SECTION -->
    <section class="home-header">
        <Header />
    </section>

    <!-- BODY SECTION -->
    <section class="home-body">
        <Home {data} />
    </section>

    <!-- FOOT SECTION -->
    <section class="home-footer">
        <Footer />
    </section>
</main>

<style>
    main {
        margin:                             0;
        padding:                            0;
    }
</style>
