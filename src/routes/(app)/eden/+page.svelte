<!-- EDEN HOME -->
<script lang="ts">
    // import { theme } from '$ts/theme';
    // import EdenLogoLight from '$icons/eden-logo-dark.png';
    // import EdenLogoDark from '$icons/eden-logo-light.png';

    // $: isDark = $theme === 'dark';
</script>
    
<section id="eden-content" class="eden-content">

    <header class="eden-header">
        <h1 class="eden-title">
            EDEN
        </h1>
        <p class="eden-acronym">
            Emergent Developmental Engine for Neural-Networks
        </p>
        <div class="eden-logo">
            <!--
             {#if isDark}
                <img src={EdenLogoDark} alt="EDEN"/>
            {:else}
                <img src={EdenLogoLight} alt="EDEN"/>
            {/if} 
            -->
        </div>
    </header>

    <p class="eden-lead">
        EDEN is a cognitive architecture for developing AGI and embodied 
        AI through experience, not data.
    </p>
    <p>
        It is built on the bicameral mind theory of consciousness, and 
        runs inside a time-dilated virtual environment. It learns by 
        living, not by reading. EDEN is not an LLM. It does not assume 
        intelligence emerges from text. It takes the older, harder bet: 
        that intelligence emerges from time, embodiment, and experience. 
        The way you and I did.
    </p>

    <blockquote class="eden-quote">
        <p>
            "He wanted to create consciousness. He imagined it as a 
            pyramid. Memory, improvisation, self-interest. Never got 
            there. But he had a notion of what it might be. He based 
            it on a theory of consciousness called the bicameral mind."
        </p>
        <p class="eden-quote-attribution">
            "Arnold built a version of that cognition in which the hosts 
            heard their programming as an inner monologue, with the 
            hopes that in time, their own voice would take over. It 
            was a way to bootstrap consciousness."
        </p>
        <p class="eden-quote-attribution">
            <cite>— Dr. Robert Ford, <em>Westworld</em></cite>
        </p>
    </blockquote>

    <h2>
        <svg class="h2-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 4 L13 12 L5 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 4 L20 12 L12 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        The Theory
    </h2>
    <p>
        Julian Jaynes proposed that early human consciousness was 
        bicameral: two cognitive systems, one issuing directives, the 
        other experiencing them as external voice. Modern consciousness, 
        in his framing, emerged when those two systems integrated and 
        the inner voice was recognized as self.
    </p>
    <p>
        As a theory of human history it is contested. As a blueprint 
        for building a mind from scratch, it is something else entirely: 
        a developmental scaffold. A way for an artificial agent to 
        bootstrap from instruction-following to self-directed cognition 
        through inner monologue, the way the theory imagines we did.
    </p>

    <h2>
        <svg class="h2-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 4 L13 12 L5 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 4 L20 12 L12 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        The Approach
    </h2>

    <p>
        Intelligence is not retrieved from a dataset. It is grown in time, 
        through curiosity, embodiment, and feedback. EDEN takes this seriously 
        and builds the conditions for that growth.
    </p>
    <p>
        A simulated world provides physics, sensation, and consequence. Time 
        dilation compresses years of development into days. A swarm of scripted 
        agents scaffolds language, social norms, and shared tasks. The agent 
        learns by perceiving, acting, predicting, failing, and adjusting. No 
        pre-training. No imitation. Just experience, accumulated.
    </p>

    <h2>
        <svg class="h2-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 4 L13 12 L5 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 4 L20 12 L12 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        The Architecture
    </h2>
    <p>
        EDEN is organized into four layers, each responsible for a 
        distinct part of the developmental loop:
    </p>
    <div class="arch-timeline">
        <div class="arch-row name-left">
            <div class="arch-row-name">
                <span class="arch-name">
                    Realm
                </span>
                <span class="arch-role">
                    the world
                </span>
            </div>
            <div class="arch-row-box">
                <p>
                    The simulated environment. World engine, physics, sensory 
                    feedback, agent swarms, a taskmaster that shapes exploration. 
                    This is what the agent inhabits and acts on.
                </p>
            </div>
        </div>
        <div class="arch-row name-right">
            <div class="arch-row-box">
                <p>
                    The integrated cognitive system. Perception, memory, curiosity, 
                    reward, self-model, theory of mind, world model, planning, 
                    language. All interacting modules, plus a learning system 
                    that adapts them over time.
                </p>
            </div>
            <div class="arch-row-name">
                <span class="arch-name">
                    Cortex
                </span>
                <span class="arch-role">
                    the mind
                </span>
            </div>
        </div>
        <div class="arch-row name-left">
            <div class="arch-row-name">
                <span class="arch-name">
                    Surface
                </span>
                <span class="arch-role">
                    the interface
                </span>
            </div>
            <div class="arch-row-box">
                <p>
                    Sensory and motor I/O between Cortex and Realm. Emotional 
                    state. Language. The inner monologue loop that Jaynes' theory 
                    identifies as the seed of self-directed thought.
                </p>
            </div>
        </div>
        <div class="arch-row name-right">
            <div class="arch-row-box">
                <p>
                    This is also where guardrails live. If we're building something 
                    that might one day suffer, we should be ready for that from day one,
                    not as an afterthought.
                </p>
            </div>
            <div class="arch-row-name">
                <span class="arch-name">
                    Orchestrator
                </span>
                <span class="arch-role">
                    the meta-layer
                </span>
            </div>
        </div>
    </div>

    <h2>
        Current Status
    </h2>

    <div class="status-progress" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" aria-label="Project progress">
        <div class="status-progress-track">
            <div class="status-progress-fill"></div>
        </div>
        <div class="status-progress-labels">
            <span class="status-progress-stage">Design</span>
            <span class="status-progress-stage">Bootstrap</span>
            <span class="status-progress-stage">Prototype</span>
            <span class="status-progress-stage">Release</span>
        </div>
    </div>

    <p>
        EDEN is in design. The repository is private and the code is 
        early. Public work is happening on Dragonstone, the language 
        EDEN is being built in. EDEN will merge in once Dragonstone 
        ships a usable bootstrap, FFI, core standard library, and the 
        Forge package manager.
    </p>

    <p>
        The order is deliberate. Dragonstone is not a side project that 
        EDEN happens to use; it is the substrate EDEN requires. A language 
        fast enough to run a compiled cognitive core, expressive enough 
        to write self-modifying behavioral logic, and unified enough to 
        bridge both without leaving the language. That is what is being 
        built right now to make EDEN possible. No off-the-shelf engine 
        or LLM is going to cut it.
    </p>

    <p>
        EDEN is the long game. Dragonstone is the work in front of it. 
        If any of this resonates with you, the architecture, the bet, 
        the refusal to take the LLM shortcut, the place to follow along 
        is the Dragonstone repository. The community is small. You'd be 
        early.
    </p>
</section>

<style>
    /* 
    .eden {
        display: flex;
        height: calc(100vh - 10rem);
        position: relative;
        justify-content: center;
    } 
    */

    /* EDEN Header — centered hero */
    /* Hero header — stacked center */
    :global(.eden-content .eden-header) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 4rem;
        gap: 0.5rem;
    }

    :global(.eden-content .eden-title) {
        font-size: clamp(3rem, 8vw, 5rem);
        margin: 0;
        letter-spacing: 0.08em;
        line-height: 1;
        color: var(--txt-primary);
        font-family: "Minimo Bold", sans-serif;
    }

    :global(.eden-content .eden-acronym) {
        color: var(--txt-secondary);
        font-style: italic;
        font-size: 1.05em;
        margin: 0;
    }

    :global(.eden-content .eden-logo) {
        margin-top: 1.75rem;
    }

    :global(.eden-content .eden-logo img) {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
    }

    /* Architecture timeline */
    :global(.eden-content .arch-timeline) {
        position: relative;
        margin: 3rem 0;
        padding: 2rem 0;
    }

    :global(.eden-content .arch-timeline::before) {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        transform: translateX(-50%);
        background: var(--logo-color);
        mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
        );
    }

    :global(.eden-content .arch-row) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
        align-items: center;
        position: relative;
    }

    :global(.eden-content .arch-row:last-child) {
        margin-bottom: 0;
    }

    /* Connector dot on the line at each row */
    :global(.eden-content .arch-row::after) {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--logo-color);
        box-shadow: 0 0 0 4px var(--dark-base, #0E0E0E);
        z-index: 1;
    }

    /* Name label styling */
    :global(.eden-content .arch-row-name) {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    :global(.eden-content .arch-row-name .arch-name) {
        font-family: "Minimo Bold", sans-serif;
        font-size: 1.5rem;
        color: var(--txt-primary);
        line-height: 1;
    }

    :global(.eden-content .arch-row-name .arch-role) {
        color: var(--logo-color);
        font-style: italic;
        font-size: 0.95rem;
    }

    /* Description box styling */
    :global(.eden-content .arch-row-box) {
        background: var(--gradient);
        border: var(--border-card);
        border-radius: var(--border-radius-rounded-edge);
        padding: 1.25rem 1.5rem;
        box-shadow: var(--shadow);
    }

    :global(.eden-content .arch-row-box p) {
        margin: 0;
    }

    /* Alternating layout — name on left */
    :global(.eden-content .arch-row.name-left .arch-row-name) {
        justify-self: end;
        text-align: right;
        padding-right: 1.5rem;
    }

    :global(.eden-content .arch-row.name-left .arch-row-box) {
        justify-self: start;
        margin-left: 1.5rem;
        max-width: 100%;
    }

    /* Alternating layout — name on right */
    :global(.eden-content .arch-row.name-right .arch-row-name) {
        justify-self: start;
        text-align: left;
        padding-left: 1.5rem;
    }

    :global(.eden-content .arch-row.name-right .arch-row-box) {
        justify-self: end;
        margin-right: 1.5rem;
        max-width: 100%;
    }

    /* Current Status progress bar */
    :global(.eden-content .status-progress) {
        margin: 2rem 0 2.5rem 0;
    }

    :global(.eden-content .status-progress-track) {
        position: relative;
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 999px;
        overflow: hidden;
    }

    :global(.eden-content .status-progress-fill) {
        width: 33%;
        height: 100%;
        background: linear-gradient(
            to right,
            var(--logo-color),
            var(--ds-base-200, #5E06EE)
        );
        border-radius: 999px;
        box-shadow: 0 0 8px rgba(94, 6, 238, 0.4);
        transition: width 0.6s ease;
    }

    :global(.eden-content .status-progress-labels) {
        display: flex;
        justify-content: space-between;
        margin-top: 0.75rem;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--txt-secondary);
        opacity: 0.7;
    }

    :global(.eden-content .status-progress-stage) {
        font-family: "Minimo Bold", sans-serif;
    }

    :global(.eden-content h2) {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding-top: 2.5rem;
    }

    :global(.eden-content .h2-chevron) {
        width: 0.85em;
        height: 0.85em;
        color: var(--logo-color);
        flex-shrink: 0;
    }

    :global(.eden-content .eden-quote) {
        margin-top: 2.5rem;
    }

    :global(.eden-content .eden-quote-attribution) {
        margin-top: 1rem;
    }

    :global(.eden-content .eden-quote-cite) {
        margin-top: 1.5rem;
        font-size: 0.9em;
        opacity: 0.75;
    }

    /* Mobile — collapse to single column, line moves left */
    @media (max-width: 768px) {
        :global(.eden-content .arch-timeline::before) {
            left: 0.75rem;
        }

        :global(.eden-content .arch-row) {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding-left: 2.5rem;
        }

        :global(.eden-content .arch-row::after) {
            left: 0.75rem;
        }

        :global(.eden-content .arch-row.name-left .arch-row-name),
        :global(.eden-content .arch-row.name-right .arch-row-name) {
            justify-self: start;
            text-align: left;
            padding: 0;
        }

        :global(.eden-content .arch-row.name-left .arch-row-box),
        :global(.eden-content .arch-row.name-right .arch-row-box) {
            justify-self: start;
            margin: 0;
        }

        :global(.eden-content .arch-row.name-right .arch-row-box) {
            order: 2;
        }
    }
</style>
