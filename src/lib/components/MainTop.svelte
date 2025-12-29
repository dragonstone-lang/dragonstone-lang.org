<script lang="ts">
    export let data: { 
        home1Html: string, 
        home2Html: string,
        home3Html: string,
    };
</script>

<section class="home-body-top">
    <div class="home-body-top-inner">
        <article class="home-code-card">
            <header class="home-code-card-header">
                <p class="home-code-card-kicker">
                    <!-- Basics -->
                </p>
                <h3>
                    <!-- Hello World -->
                </h3>
            </header>
            <div class="pre">
                {@html data.home1Html}
            </div>
        </article>

        <article class="home-code-card">
            <header class="home-code-card-header">
                <p class="home-code-card-kicker">
                    <!-- Syntax -->
                </p>
                <h3>
                    <!-- Variables -->
                </h3>
            </header>
            <div class="pre">
                {@html data.home2Html}
            </div>
        </article>

        <article class="home-code-card">
            <header class="home-code-card-header">
                <p class="home-code-card-kicker">
                    <!-- Flow -->
                </p>
                <h3>
                    <!-- Conditionals -->
                </h3>
            </header>
            <div class="pre">
                {@html data.home3Html}
            </div>
        </article>
    </div>
</section>

<style>
    .home-body-top {
        margin:                             0;
        padding:                            0;
    }

    .home-body-top-inner {
        display:                            grid;
        grid-template-columns:              repeat(3, minmax(0, 1fr));
        gap:                                1.5rem;
        max-width:                          var(--container-contain-padding);
        margin:                             0 auto;
        padding:                            var(--container-section-padding);
    }

    .home-code-card-header {
        display:                            grid;
        gap:                                0.35rem;
    }

    .home-code-card-kicker {
        text-transform:                     uppercase;
        letter-spacing:                     0.2em;
        font-size:                          0.7rem;
        color:                              var(--txt-secondary);
        margin:                             0;
    }

    .home-code-card h3 {
        margin:                             0;
        color:                              var(--txt-primary);
        font-size:                          1.15rem;
    }

    .home-code-card .pre :global(pre) {
        margin:                             0;
        padding:                            1rem 1.25rem;
        border-radius:                      8px;
        background:                         var(--bg-accent);
        border:                             2px solid var(--logo-color);
        color:                              var(--txt-primary);
        overflow-x:                         auto;
        font-size:                          0.95rem;
        line-height:                        1.6;
    }

    @media (max-width: 960px) {
        .home-body-top-inner {
            grid-template-columns:          1fr;
        }
    }
</style>
