<!-- DOCS LAYOUT -->
<script lang="ts">
    import '$css/index.css';
    import Nav from "$components/NavigationBar.svelte";
    import { page } from "$app/stores";
    import { slide } from "svelte/transition";

    let sidebarOpen = false;
    let currentPath = "";
    let activeSubsections: { id: string; label: string }[] | null = null;

    $: currentPath = $page.url.pathname.replace(/\/$/, "") || "/";
    $: activeSubsections = docsSubsections[currentPath] ?? null;

    function isActive(path: string) {
        return currentPath === path;
    }

    const docsSubsections: Record<string, { id: string; label: string }[]> = {
        "/docs/getting-started": [
            { id: "file-extensions", label: "Dragonstone File Extensions" },
            { id: "forge-package-manager", label: "Forge Package Manager" },
            { id: "installing-dragonstone", label: "Installing Dragonstone" },
            { id: "using-the-interpreter", label: "Using the Interpreter" },
            { id: "using-the-compiler", label: "Using the Compiler" },
            { id: "helpful-extensions", label: "Helpful Extensions" }
        ],
        "/docs/introduction": [
            { id: "hello-world", label: "Hello World" },
            { id: "comments", label: "Comments" },
            { id: "variables", label: "Variables" },
            { id: "strings", label: "Strings" },
            { id: "numbers", label: "Numbers" }
        ]
    };

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
    }

    function onToggleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSidebar();
        }
    }
</script>

<main class="docs-home">

    <!-- NAVBAR SECTION -->
    <div class="header-nav-bar">
        <Nav />
    </div>

    <section class="docs">
        <div class="docs-inner">
            <div
                class="docs-menu"
                class:is-active={sidebarOpen}
                role="button"
                tabindex="0"
                aria-expanded={sidebarOpen}
                aria-controls="sidebar"
                on:click={toggleSidebar}
                on:keydown={onToggleKeydown}
            >
                <div class="docs-menu-toggle">
                    <span></span>
                </div>
            </div>
            <aside class="docs-sidebar" class:is-active={sidebarOpen} id="sidebar">
                <nav class="docs-sidebar-menu">
                    <a href="/docs" class="menu-item" class:is-active={isActive("/docs")}>
                        index
                    </a>
                    <a
                        href="/docs/getting-started"
                        class="menu-item"
                        class:is-active={isActive("/docs/getting-started")}
                    >
                        getting started
                    </a>
                    {#if isActive("/docs/getting-started") && activeSubsections}
                        {#key currentPath}
                            <div
                                id="docs-menu-subsections"
                                class="docs-subsections"
                                transition:slide={{ duration: 180 }}
                            >
                                {#each activeSubsections as subsection}
                                    <a
                                        href={`${currentPath}#${subsection.id}`}
                                        class="docs-subsection-link"
                                    >
                                        {subsection.label}
                                    </a>
                                {/each}
                            </div>
                        {/key}
                    {/if}
                    <a
                        href="/docs/introduction"
                        class="menu-item"
                        class:is-active={isActive("/docs/introduction")}
                    >
                        introduction
                    </a>
                    {#if isActive("/docs/introduction") && activeSubsections}
                        {#key currentPath}
                            <div
                                id="docs-menu-subsections"
                                class="docs-subsections"
                                transition:slide={{ duration: 180 }}
                            >
                                {#each activeSubsections as subsection}
                                    <a
                                        href={`${currentPath}#${subsection.id}`}
                                        class="docs-subsection-link"
                                    >
                                        {subsection.label}
                                    </a>
                                {/each}
                            </div>
                        {/key}
                    {/if}
                    <a
                        href="/docs/specification"
                        class="menu-item"
                        class:is-active={isActive("/docs/specification")}
                    >
                        specification
                    </a>
                    <a
                        href="/docs/advanced-specification"
                        class="menu-item"
                        class:is-active={isActive("/docs/advanced-specification")}
                    >
                        advanced specification
                    </a>
                </nav>
            </aside>
            <div class="docs-content">
                <slot />
            </div>
        </div>
    </section>
</main>

<style>
    main {
        margin: 0;
        padding: 0;
    }

    /* Docs Layout */
    .docs {
        display: flex;
        height: calc(100vh - 10rem);
        position: relative;
        justify-content: center;
    }

    .docs-inner {
        display: flex;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .docs-menu {
        display: none;
        position: fixed;
        top: calc(2rem + 40px);
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        background-color: var(--txt-secondary);
        backdrop-filter: blur(10px);
        cursor: pointer;
        z-index: 1000;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.2s ease;
    }

    .docs-menu:hover {
        background-color: rgba(46, 48, 71, 1);
        transform: scale(1.05);
        transition: color 0.3s;
    }

    .docs-menu-toggle {
        position: relative;
        top: calc(50% - 2px);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
    }

    .docs-menu-toggle > span,
    .docs-menu-toggle > span::before,
    .docs-menu-toggle > span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: var(--txt-secondary);
        transition: all 0.25s ease;
    }

    .docs-menu-toggle > span::before {
        content: '';
        top: -7px;
    }

    .docs-menu-toggle > span::after {
        content: '';
        top: 7px;
    }

    .docs-menu.is-active .docs-menu-toggle > span {
        transform: rotate(45deg);
    }

    .docs-menu.is-active .docs-menu-toggle > span::before {
        top: 0;
        transform: rotate(0deg);
    }

    .docs-menu.is-active .docs-menu-toggle > span::after {
        top: 0;
        transform: rotate(90deg);
    }

    /* Sidebar */
    .docs-sidebar {
        flex: 0 0 280px;
        width: 280px;
        padding: 2rem 1rem;
        background-color: var(--bg-secondary);
        border-right: 1px solid var(--bg-accent);
        overflow-y: auto;
        border-radius: 8px;
    }

    .docs-sidebar .docs-sidebar-menu {
        margin: 0 -1rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .docs-sidebar .docs-sidebar-menu .menu-item {
        display: flex;
        align-items: center;
        padding: 0.875rem 1.5rem;
        color: var(--txt-secondary);
        text-decoration: none;
        transition: all 0.2s ease;
        border-radius: 8px;
        margin: 0 0.5rem;
        font-size: 0.95rem;
        font-weight: 500;
        position: relative;
    }

    .docs-sidebar .docs-sidebar-menu .menu-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 0;
        background: var(--logo-color);
        border-radius: 0 3px 3px 0;
        transition: height 0.2s ease;
    }

    .docs-sidebar .docs-sidebar-menu .menu-item:hover {
        color: var(--txt-primary);
        background: var(--bg-accent);
        transition: color 0.3s;
    }

    .docs-sidebar .docs-sidebar-menu .menu-item.is-active {
        color: var(--button-primary);
        background: rgba(106, 90, 205, 0.1);
    }

    .docs-sidebar .docs-sidebar-menu .menu-item.is-active::before {
        height: 60%;
    }

    .docs-subsections {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 0.5rem 1rem 0.75rem 2rem;
        padding-left: 0.75rem;
        border-left: 1px solid rgba(255, 255, 255, 0.08);
    }

    .docs-subsection-link {
        color: var(--txt-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        line-height: 1.4;
        transition: color 0.2s ease;
    }

    .docs-subsection-link:hover {
        color: var(--txt-primary);
    }

    /* Content Area */
    .docs-content {
        flex: 1 1 auto;
        padding: 3rem;
        overflow-y: auto;
        background: var(--bg-base);
    }

    :global(#docs-content) {
        width: 100%;
        max-width: 70ch;
        margin: 0 auto;
    }

    :global(#docs-content > * + *) {
        margin-top: 1.25rem;
    }

    :global(.docs-content h1) {
        color: var(--txt-primary);
        font-size: var(--font-title-font-size);
        margin-bottom: 1rem;
        font-weight: var(--font-title-font-weight);
    }

    :global(.docs-content h2) {
        color: var(--txt-primary);
        font-size: var(--font-subtitle-font-size);
        margin-bottom: 1rem;
        font-weight: var(--font-subtitle-font-weight);
    }

    :global(.docs-content h3) {
        color: var(--txt-primary);
        font-size: var(--font-heading-font-size);
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: var(--font-heading-font-weight);
    }

    :global(.docs-content p) {
        color: var(--txt-secondary);
        font-size: var(--font-paragraph-font-size);
        line-height: var(--line-height-paragraph);
    }

    :global(.docs-content ul),
    :global(.docs-content ol) {
        color: var(--txt-secondary);
        padding-left: 1.25rem;
        line-height: var(--line-height-paragraph);
    }

    :global(.docs-content li + li) {
        margin-top: 0.35rem;
    }

    :global(.docs-content a) {
        color: var(--logo-color);
        text-decoration: none;
        border-radius: 6px;
        padding: 0.05rem 0.2rem;
        transition: color 0.2s ease, background-color 0.2s ease;
    }

    :global(.docs-content a:hover) {
        text-decoration: none;
        color: var(--button-primary);
        background: var(--bg-accent);
        transition: all 0.2s ease;
    }

    :global(.docs-content a:focus-visible) {
        outline: 2px solid var(--logo-color);
        outline-offset: 2px;
        background: var(--bg-accent);
    }

    :global(.docs-content a:active) {
        color: var(--txt-primary);
    }

    :global(.docs-content code) {
        font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.95em;
        color: var(--txt-primary);
        background: rgba(255, 255, 255, 0.06);
        padding: 0.1rem 0.35rem;
        border-radius: 6px;
    }

    :global(.docs-content pre) {
        background: rgba(255, 255, 255, 0.06);
        padding: 0.25rem 1.25rem;
        border-radius: 10px;
        overflow-x: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    :global(.docs-content pre code) {
        background: transparent;
        padding: 0;
    }

    /* Scrollbar Styling */
    .docs-sidebar::-webkit-scrollbar,
    .docs-content::-webkit-scrollbar {
        width: 8px;
    }

    .docs-sidebar::-webkit-scrollbar-track,
    .docs-content::-webkit-scrollbar-track {
        background: transparent;
    }

    .docs-sidebar::-webkit-scrollbar-thumb,
    .docs-content::-webkit-scrollbar-thumb {
        background: var(--txt-primary);
        border-radius: 4px;
    }

    .docs-sidebar::-webkit-scrollbar-thumb:hover,
    .docs-content::-webkit-scrollbar-thumb:hover {
        background: var(--txt-secondary);
        transition: color 0.3s;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .docs-sidebar {
            flex: 0 0 240px;
            width: 240px;
        }

        .docs-content {
            padding: 2rem;
        }
    }

    @media (max-width: 768px) {
        .docs-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .docs-content {
            padding: 2rem 1.5rem;
        }

        :global(.docs-content h1) {
            font-size: 2rem;
        }

        .docs-sidebar {
            position: fixed;
            top: 40px;
            left: -280px;
            height: calc(100vh - 40px);
            width: 280px;
            transition: left 0.3s ease;
            z-index: 999;
            box-shadow: var(--shadow);
        }

        .docs-sidebar.is-active {
            left: 0;
        }
    }
</style>
