<script lang="ts">
    import MainTop from "$components/MainTop.svelte";
    import MainCenter from "$components/MainCenter.svelte";
    import MainBottom from '$components/MainBottom.svelte';

    export let data: {
        home1Html: string;
        home2Html: string;
        home3Html: string;
    };
</script>

<section class="home">
    <div class="home-body-top">
        <MainTop {data} />
    </div>
    <div class="home-body-center">
        <MainCenter />
    </div>
    <div class="home-body-bottom">
        <MainBottom />
    </div>
</section>

<style>
    .home {
        margin:                             0;
        padding:                            0;
    }
</style>
