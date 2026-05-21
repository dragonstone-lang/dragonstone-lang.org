<script lang="ts">
    import { theme } from '$ts/theme';
    import { Button } from 'bits-ui';

    // Hero Logo
    import EdenLogoLight from '$icons/eden-logo-dark.png';
    import EdenLogoDark from '$icons/eden-logo-light.png';

    $: isDark = $theme === 'dark';
</script>

<section class="home-body-center">

    <!-- Center Hero Section -->
    <div class="center-hero">
        <div class="center-hero-contain">
            <div class="center-hero-text center-hero-container">

                <!-- Center Hero Title -->
                <div class="center-hero-head-title">
                    <h1>
                        Why Dragonstone?
                    </h1>
                    <h2>
                        Language for humans. Substrate for minds.
                    </h2> 
                </div>

                <!-- Center Hero Paragraph -->
                <div class="center-hero-head-paragraph">

                </div>
            </div>
        </div>
    </div>

    <div class="hero">
        <div class="hero-contain">
            <div class="hero-grid">
            
                <!-- Left Column Text -->
                <div class="hero-text">
                    <!--
                    <div class="hero-brand">
                        <span class="hero-phonetic">
                            /ˈdrægənˌstoʊn/
                        </span>
                        <span class="hero-tag">
                            LANGUAGE
                        </span>
                        <span class="hero-tagline">
                            forged for humans, built for minds
                        </span>
                    </div>
                    -->
                    <div class="hero-body">
                        <p class="hero-body-p1">
                            Dragonstone is designed to scale with you, readable enough to start, expressive 
                            enough to finish, robust enough for the work ahead. But this is just the 
                            beginning. Dragonstone is the substrate. EDEN is what it's built for.
                        </p>
                        <p class="hero-body-p2">
                            What if an AI learned the way you did? Through time, 
                            embodiment, and experience, not datasets?
                        </p>
                        <p class="hero-emphasis">
                            That's EDEN. Forged in fire, built with Dragonstone.
                        </p>
                    </div>
                </div>

                <!-- Right Column Cards -->
                <div class="hero-visual">
                    <div class="card card-eden">
                        {#if isDark}
                            <img src={EdenLogoDark} alt="EDEN" class="card-eden-logo"/>
                        {:else}
                            <img src={EdenLogoLight} alt="EDEN" class="card-eden-logo"/>
                        {/if}
                        <div class="card-eden-text">
                            <p class="card-eden-title">
                                EDEN
                            </p>
                            <p class="card-eden-sub">
                                Emergent Developmental Engine for Neural-Networks
                            </p>
                        </div>
                    </div>
                    <div class="card card-stat">
                        <p class="card-stat-label">
                            BICAMERAL MIND | the theory
                        </p>
                        <p class="card-stat-value">
                            Two-system cognition, where inner monologue scaffolds consciousness. Treated as architecture, not just theory.
                        </p>
                    </div>
                    <div class="card card-stat">
                        <p class="card-stat-label">
                            TIME-DILATED REALM | the world
                        </p>
                        <p class="card-stat-value">
                            A simulated environment where years of development compress into days. Physics, embodiment, agent swarms, tasks.
                        </p>
                    </div>
                    <div class="card card-stat">
                        <p class="card-stat-label">
                            EMERGENT DEVELOPMENT | the approach
                        </p>
                        <p class="card-stat-value">
                            No datasets. No pre-training. Intelligence built through curiosity, experience, and time. The way you did.
                        </p>
                    </div>
                </div>

                <!-- Hero Action Button -->
                <div class="eden-hero-action">
                    <a href="/eden" class="eden-hero-action-button">
                        <Button.Root>
                            <span>
                                Learn More →
                            </span>
                        </Button.Root>
                    </a>
                </div>

            </div>
        </div>
    </div>
</section>

<style>
    center-hero {
        margin:                             0;
        padding:                            0;
    }

    .center-hero {
        height:                             100%;
        width:                              100%;
    }

    .center-hero::before {
        content:                            "";
        position:                           absolute;
        top:                                0;
        bottom:                             0;
        width:                              100%;
        height:                             100%;
        z-index:                            var(--z-index-bg-layer);
    }

    .center-hero-contain {
        max-width:                          var(--container-contain-padding);
        padding-left:                       max(var(--container-padding),env(safe-area-inset-left));
        padding-right:                      max(var(--container-padding),env(safe-area-inset-left));
        margin-left:                        auto;
        margin-right:                       auto;
    }

    .center-hero-text, .center-hero-container {
        width:                              100%;
        height:                             100%;
    } 
    
    .center-hero-container {
        display:                            grid;
        text-align:                         center;
        place-items:                        center;
    }
    
    .center-hero-head-title {
        font-family:                        "Minimo Bold", sans-serif;
        color:                              var(--txt-primary);
        font-weight:                        var(--font-heavy-font-weight);
        font-size:                          var(--font-title-font-size);
        letter-spacing:                     var(--hero-letter-spacing);
        line-height:                        var(--hero-letter-spacing);
        max-width:                          24ch;
        margin-bottom:                      0.5rem;
        text-wrap:                          balance;
        display:                            block;
        margin-block-start:                 0.67em;
        margin-block-end:                   0.67em;
        margin-inline-start:                0;
        margin-inline-end:                  0;
    }

    .center-hero-head-title h2 {
        font-family:                        "Minimo", sans-serif;
        letter-spacing:                     var(--subtitle-letter-spacing);
        font-size:                          var(--font-subtitle-font-size);
        margin-block-start:                 0.67em;
        margin-block-end:                   0.34em;
    }

    /*
    .center-hero-head-title h3 {
        font-family:                        "Minimo", sans-serif;
        letter-spacing:                     var(--paragraph-letter-spacing);
        font-size:                          var(--font-paragraph-font-size);
        margin-block-start:                 0.67em;
        margin-block-end:                   0.67em;
    }
    */

    .center-hero-head-paragraph {
        font-family:                        "Minimo Light", sans-serif;
        letter-spacing:                     var(--title-letter-spacing);
        font-size:                          var(--font-paragraph-font-size);
        line-height:                        var(--font-paragraph-line-height);
        color:                              var(--txt-secondary);
        max-width:                          25rem;
        margin-top:                         0.5rem;
        margin-bottom:                      0.25rem;
    }

    .hero {
        position:                           relative;
        width:                              100%;
        padding:                            0.50rem 0rem;
    }

    .hero-contain {
        max-width:                          var(--container-contain-padding);
        padding-left:                       max(var(--container-padding),env(safe-area-inset-left));
        padding-right:                      max(var(--container-padding),env(safe-area-inset-right));
        margin-left:                        auto;
        margin-right:                       auto;
    }

    .hero-grid {
        display:                            grid;
        grid-template-columns:              1rem;
        gap:                                3rem;
        align-items:                        center;
    }

    /* Left Column */
    .hero-text {
        text-align:                         left; 
    }

    /*
    .hero-brand {
        display:                            flex;
        align-items:                        center;
        gap:                                0.75rem;
        margin-bottom:                      1.5rem;
        flex-wrap:                          wrap;
    }

    .hero-phonetic {
        font-family:                        "Minimo", Georgia, serif;
        font-style:                         italic;
        font-size:                          1.6rem;
        color:                              #d14b3a;
        letter-spacing:                     0.01em;
    }

    .hero-tag {
        background:                         rgba(255, 255, 255, 0.08);
        color:                              var(--txt-primary);
        padding:                            0.25rem 0.6rem;
        border-radius:                      4px;
        font-size:                          0.7rem;
        font-weight:                        700;
        letter-spacing:                     0.08em;
    }

    .hero-tagline {
        color:                              var(--txt-secondary);
        font-size:                          0.95rem;
    }
    */

    .hero-title {
        font-family:                        "Minimo Bold", sans-serif;
        color:                              var(--txt-primary);
        font-weight:                        var(--font-heavy-font-weight);
        font-size:                          var(--font-title-font-size);
        letter-spacing:                     var(--hero-letter-spacing);
        line-height:                        var(--hero-letter-spacing);
        margin-block-start:                 0.67em;
        margin-block-end:                   0.67em;
        margin-inline-start:                0;
        margin-inline-end:                  0;
        text-wrap:                          balance;
    }

    .hero-subtitle {
        font-family:                        "Minimo", sans-serif;
        font-size:                          var(--font-subtitle-font-size);
        letter-spacing:                     var(--subtitle-letter-spacing);
        color:                              var(--txt-secondary);
        margin-block-start:                 0.67em;
        margin-block-end:                   0.67em;
    }

    .hero-body {
        font-family:                        "Minimo Light", sans-serif;
        letter-spacing:                     var(--title-letter-spacing);
        font-size:                          var(--font-paragraph-font-size);
        line-height:                        var(--font-paragraph-line-height);
        color:                              var(--txt-secondary);
        max-width:                          34rem;
        margin-top:                         0.5rem;
        margin-bottom:                      0.25rem;
    }

    .hero-body p {
        margin-top:                         0.5rem;
        margin-bottom:                      1rem;
    }

    .hero-body-p2 {
        padding-top:                        2.5rem;
    }

    .hero-emphasis {
        padding-top:                        2.5rem;
        color:                              var(--txt-primary);
        font-weight:                        600;
    }

    /* Right Column Cards */
    .hero-visual {
        position:                           relative;
        display:                            none;
        flex-direction:                     column;
        gap:                                1.25rem;
    }

    .card {
        background:                         var(--gradient);
        border:                             var(--border-card);
        border-radius:                      var(--border-radius-rounded-edge);
        box-shadow:                         var(--shadow);
        padding:                            var(--container-button-padding);
        transition:                         transform 0.3s ease;
        backdrop-filter:                    blur(0.5px);
        -webkit-backdrop-filter:            blur(0.5px);
    }

    .card:hover {
        transform:                          translateY(-4px);
    }

    /* EDEN Brand Header */
    .card-eden {
        width:                              100%;
        padding:                            1.25rem 1.5rem;
        transform:                          rotate(-2deg);
        display:                            flex;
        align-items:                        center;
        gap:                                1rem;
        margin-bottom:                      0.5rem;
    }

    .card-eden:hover {
        transform:                          translateY(-4px) rotate(0deg);
    }

    .card-eden-logo {
        width:                              3.5rem;
        height:                             3.5rem;
        object-fit:                         contain;
    }

    .card-eden-title {
        font-family:                        "Minimo Bold", sans-serif;
        font-size:                          1.1rem;
        margin:                             0 0 0.25rem 0;
        color:                              var(--txt-primary);
    }

    .card-eden-sub {
        font-size:                          0.75rem;
        color:                              var(--txt-secondary);
        margin:                             0;
        line-height:                        1.4;
    }

    /* Concept Cards */
    .card-stat {
        width:                              100%;
        padding:                            1.25rem 1.5rem;
    }

    .card-stat-label {
        font-family:                        "Minimo Bold", sans-serif;
        font-size:                          0.7rem;
        text-transform:                     uppercase;
        letter-spacing:                     0.12em;
        color:                              var(--txt-secondary);
        margin:                             0 0 0.5rem 0;
    }

    .card-stat-value {
        font-family:                        "Minimo", sans-serif;
        font-size:                          0.95rem;
        color:                              var(--txt-primary);
        margin:                             0;
        line-height:                        1.5;
    }


    /* EDEN Button */
    .eden-hero-action-button {
        position:                           relative;
        /* top:                                -5rem; */
        transform:                          translateY(-7.5rem);
        display:                            inline-flex;
        align-items:                        center;
        justify-content:                    center;
        padding:                            var(--container-button-padding);
        color:                              var(--txt-primary);
        gap:                                var(--gap-hero-caption);
        background:                         var(--gradient);
        border:                             var(--border);
        border-top:                         1px solid var(--highlight);
        box-shadow:                         var(--shadow);
        border-radius:                      var(--border-radius-rounded-edge);
        backdrop-filter:                    blur(5px);
        -webkit-backdrop-filter:            blur(5px);
    }

    .eden-hero-action-button span {
        display:                            flex;
        align-items:                        center;
        gap:                                var(--gap-hero-caption);
    }

    .eden-hero-action-button:hover,
    .eden-hero-action-button:hover span {
        cursor:                             pointer;
    }
    .eden-hero-action-button:hover {
        background:                         var(--gradient-hover);
        transition:                         color 0.3s;
    }

    .eden-hero-action-button:hover span {
        color:                              var(--logo-color);
        transition:                         color 0.3s;
    }

    .hero-button:-webkit-any-link,
    button:-webkit-any-link {
        color:                              -webkit-link;
        cursor:                             pointer;
        text-decoration:                    none;
    }

    @media (max-width: 768px) {
        .eden-hero-action {
            flex-direction:                 column;
            width:                          100%;
            align-items:                    stretch;
        }

        .eden-hero-action-button {
            width:                          100%;
        }
    }

    @media only screen and (min-width: 0rem) {

    }

    /* Tablet - 768px */
    @media only screen and (min-width: 48rem) {

    }

    /* Small Desktop - 1024px */
    @media only screen and (min-width: 64rem) {
        .hero-grid {
            grid-template-columns:          1.05fr 1fr;
            gap:                            4rem;
        }
        
        .hero-visual {
            display:                        flex;
        }
    }
</style>
