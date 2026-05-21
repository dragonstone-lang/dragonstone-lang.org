<!-- EDEN LAYOUT -->
<script lang="ts">
    import '$css/index.css';
    import Nav from "$components/NavigationBar.svelte";
    import Footer from '$components/AppFooter.svelte';
</script>

<main class="eden-home">

    <!-- NAVBAR SECTION -->
    <div class="header-nav-bar">
        <Nav />
    </div>

    <!-- EDEN LAYOUT -->
    <section class="eden">
        <div class="eden-content">
            <slot />
        </div>
    </section>

    <!-- FOOT SECTION -->
    <section class="home-footer">
        <Footer />
    </section>
</main>

<style>
    main {
        margin: 0;
        padding: 0;
    }

    /* EDEN Layout */
    :global(#eden-content) {
        width: 100%;
        max-width: 70ch;
        margin: 0 auto;
    }

    :global(#eden-content > * + *) {
        margin-top: 1.25rem;
    }

    :global(.eden-content h1) {
        color: var(--txt-primary);
        font-size: var(--font-title-font-size);
        margin-bottom: 1rem;
        font-weight: var(--font-title-font-weight);
    }

    :global(.eden-content h2) {
        color: var(--txt-primary);
        font-size: var(--font-subtitle-font-size);
        margin-bottom: 1rem;
        font-weight: var(--font-subtitle-font-weight);
    }

    :global(.eden-content h3) {
        color: var(--txt-primary);
        font-size: var(--font-heading-font-size);
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: var(--font-heading-font-weight);
    }

    :global(.eden-content p) {
        color: var(--txt-secondary);
        font-size: var(--font-paragraph-font-size);
        line-height: var(--line-height-paragraph);
    }

    :global(.eden-content ul),
    :global(.eden-content ol) {
        color: var(--txt-secondary);
        padding-left: 1.25rem;
        line-height: var(--line-height-paragraph);
    }

    :global(.eden-content li + li) {
        margin-top: 0.35rem;
    }

    :global(.eden-content a) {
        color: var(--logo-color);
        text-decoration: none;
        border-radius: 6px;
        padding: 0.05rem 0.2rem;
        transition: color 0.2s ease, background-color 0.2s ease;
    }

    :global(.eden-content a:hover) {
        text-decoration: none;
        color: var(--button-primary);
        background: var(--bg-accent);
        transition: all 0.2s ease;
    }

    :global(.eden-content a:focus-visible) {
        outline: 2px solid var(--logo-color);
        outline-offset: 2px;
        background: var(--bg-accent);
    }

    :global(.eden-content a:active) {
        color: var(--txt-primary);
    }

    :global(.eden-content code) {
        font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.95em;
        color: var(--txt-primary);
        background: rgba(255, 255, 255, 0.06);
        padding: 0.1rem 0.35rem;
        border-radius: 6px;
    }

    :global(.eden-content pre) {
        background: rgba(255, 255, 255, 0.06);
        padding: 0.25rem 1.25rem;
        border-radius: 10px;
        overflow-x: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    :global(.eden-content pre code) {
        background: transparent;
        padding: 0;
    }

    :global(.eden-content blockquote.eden-quote) {
        border-left: 2px solid var(--logo-color);
        padding: 0.5rem 0 0.5rem 1.5rem;
        margin: 1.5rem 0;
        font-style: italic;
        color: var(--txt-secondary);
    }

    :global(.eden-content blockquote.eden-quote cite) {
        display: block;
        margin-top: 0.75rem;
        font-style: normal;
        font-size: 0.9em;
        color: var(--txt-secondary);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        :global(.eden-content h1) {
            font-size: 2rem;
        }
    }
</style>
