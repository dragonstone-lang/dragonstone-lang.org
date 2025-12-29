<!-- DOCS HOME -->
<script lang="ts">

</script>

<section id="docs-content">
    <header class="docs-home-hero">
        <p class="docs-kicker">
            Dragonstone Docs
        </p>
        <h1>
            Documentation
        </h1>
        <p class="docs-lede">
            A clean, opinionated guide to the Dragonstone language. Start with the
            fundamentals, then move into the specification and advanced topics.
        </p>
        <div class="docs-hero-actions">
            <a class="docs-pill" href="/docs/getting-started">
                Get Started
            </a>
            <a class="docs-pill is-secondary" href="/docs/specification">
                Read the Spec
            </a>
        </div>
    </header>

    <section class="docs-card" aria-labelledby="overview">
        <h2 id="overview">
            Overview
        </h2>
        <p>
            Dragonstone is inspired by Ruby and Crystal but designed for programmer
            happiness, productivity, and choice. Expect a pragmatic syntax, great
            tooling, and a focus on clarity. It'll cover some object-oriented 
            design, testing, and data structures; plus some other essential 
            knowledge for learning Dragonstone!
        </p>
    </section>

    <section class="docs-card" aria-labelledby="learning-materials">
        <h2 id="learning-materials">
            Learning Materials
        </h2>
        <p>
            Start with Getting Started to install and run your first program. Then
            move into the Introduction, followed by the Specification for deeper
            language rules. This documentation will help you get to know the 
            language and how to use it.
        </p>
        <ol class="docs-steps">
            <li>
                Getting Started
            </li>
            <li>
                Introduction
            </li>
            <li>
                Specification
            </li>
            <li>
                Advanced Specification
            </li>
        </ol>
    </section>

        <section class="docs-card" aria-labelledby="docs-toc">
        <h2 id="docs-toc">
            Table of Contents
        </h2>
        <div class="docs-toc-grid">
            <a class="docs-toc-item" href="/docs/getting-started">
                <span class="docs-toc-title">
                    Getting Started
                </span>
                <span class="docs-toc-meta">
                    Install, run, and build your first app.
                </span>
            </a>
            <a class="docs-toc-item" href="/docs/introduction">
                <span class="docs-toc-title">
                    Introduction
                </span>
                <span class="docs-toc-meta">
                    Core concepts and syntax fundamentals.
                </span>
            </a>
            <a class="docs-toc-item" href="/docs/specification">
                <span class="docs-toc-title">
                    Specification
                </span>
                <span class="docs-toc-meta">
                    Formal language rules and semantics.
                </span>
            </a>
            <a class="docs-toc-item" href="/docs/advanced-specification">
                <span class="docs-toc-title">
                    Advanced Specification
                </span>
                <span class="docs-toc-meta">
                    Edge cases, compiler behavior, and internals.
                </span>
            </a>
        </div>
    </section>

</section>

<style>
    .docs-home-hero {
        display: grid;
        gap: 1rem;
        padding: 2rem;
        border-radius: 10px;
        background: var(--gradient);
        border: var(--border-card-transparent);
        box-shadow: var(--shadow);
    }

    .docs-kicker {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 0.75rem;
        color: var(--txt-secondary);
        margin: 0;
    }

    .docs-lede {
        margin: 0;
    }

    .docs-hero-actions {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .docs-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1.1rem;
        border-radius: 8px;
        background: var(--logo-color);
        color: var(--button-primary);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
    }

    /* 
    .docs-pill.is-secondary {
        background: var(--bg-accent);
        color: var(--txt-primary);
    } 
    */

    .docs-card {
        padding: 1.75rem;
        border-radius: 8px;
        border: var(--border-card-transparent);
        background: var(--bg-primary);
    }

    .docs-toc-grid {
        display: grid;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .docs-toc-item {
        display: grid;
        gap: 0.25rem;
        padding: 0.85rem 1rem;
        border-radius: 8px;
        background: var(--bg-accent);
        border: var(--border-transparent);
        text-decoration: none;
        color: var(--txt-primary);
    }

    .docs-toc-title {
        font-weight: 600;
    }

    .docs-toc-meta {
        font-size: 0.9rem;
        color: var(--txt-secondary);
    }

    .docs-steps {
        display: grid;
        gap: 0.75rem;
        padding-left: 1.1rem;
        margin: 0;
        margin-top: 1rem;
    }

</style>
