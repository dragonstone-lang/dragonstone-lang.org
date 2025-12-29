<script lang="ts">

</script>

<section id="docs-content">
    <header class="docs-hero">
        <p class="docs-kicker">
            Getting Started
        </p>
        <h1>
            Quick Start
        </h1>
        <p class="docs-lede">
            Dragonstone is both an interpreted and compiled, high-level,
            object-oriented programming language. It uses <code>.ds</code> 
            or <code>.dragonstone</code> for scripts, <code>.eds</code> for 
            embedded use, and <code>.forge</code> for package manifests.
        </p>
        <div class="docs-hero-actions">
            <a class="docs-pill" href="#installing-dragonstone">
                Install
            </a>
            <a class="docs-pill" href="#using-the-interpreter">
                Run
            </a>
        </div>
    </header>

    <section class="docs-card" aria-labelledby="file-extensions">
        <h2 id="file-extensions">
            Dragonstone File Extensions
        </h2>
        <div class="docs-grid">
            <div class="docs-mini-card">
                <h3>
                    .ds or .dragonstone
                </h3>
                <p>
                    Standard source files for scripts and applications.
                </p>
            </div>
            <div class="docs-mini-card">
                <h3>
                    .eds
                </h3>
                <p>
                    Embedded scripts for integrations and tooling.
                </p>
            </div>
            <div class="docs-mini-card">
                <h3>
                    .forge
                </h3>
                <p>
                    Manifest used by the Forge package manager.
                </p>
            </div>
        </div>
    </section>

    <section class="docs-card" aria-labelledby="forge-package-manager">
        <h2 id="forge-package-manager">
            Forge Package Manager
        </h2>
        <p>
            A typical Dragonstone project includes a <code>.forge</code> TOML file where you
            list metadata like name, version, authors, and dependencies. Think of it
            as the single source of truth for your project.
        </p>
<pre>
<code>
# forge.toml
[package]
name = "your_project_name"
version = "0.1.0"
authors = "your_name_here"
</code>
</pre>
    </section>

    <section class="docs-card" aria-labelledby="installing-dragonstone">
        <h2 id="installing-dragonstone">
            Installing Dragonstone
        </h2>
        <ol class="docs-steps">
            <li>
                Download the latest release for your platform. From the download page
                or via <a href="https://github.com/Vallereya/dragonstone">GitHub</a> 
                and for full instructions.
            </li>
            <li>
                Add the Dragonstone binary to your PATH (if building from source).
            </li>
            <li>
                Verify the install by running <code>dragonstone --version</code>.
            </li>
        </ol>
    </section>

    <section class="docs-card" aria-labelledby="using-the-interpreter">
        <h2 id="using-the-interpreter">
            Using the Interpreter
        </h2>
        <p>
            Run a script directly to get instant feedback while prototyping.
        </p>
<pre>
<code>
dragonstone run hello.ds
</code>
</pre>
    </section>

    <section class="docs-card" aria-labelledby="using-the-compiler">
        <h2 id="using-the-compiler">
            Using the Compiler
        </h2>
        <p>
            Compile for production or distribution when you want a standalone
            binary. You can also pass the <code>--target</code> flag to specify
            your desired target such as <code>bytecode</code> or <code>llvm</code>. 
            <!-- Targets coming soon are <code>c</code>, <code>crystal</code>, 
            <code>ruby</code>, <code>python</code>, and <code>javascript</code>. -->
        </p>
        <br>
        <p>
            To build:
        </p>
<pre>
<code>
dragonstone build hello.ds
</code>
</pre>
        <p>
            Or to build and run:
        </p>
<pre>
<code>
dragonstone build-run hello.ds
</code>
</pre>
        <p>
            Select between native (interpreter) or core (compiler) backends.
        </p>
<pre>
<code>
dragonstone run --backend native examples/hello_world.ds
</code>
</pre>
        <p>
            By default, dragonstone will use native (interpreter), however, you can change it anytime.
        </p>
<pre>
<code>
export DRAGONSTONE_BACKEND=native dragonstone run examples/hello_world.ds
</code>
</pre>
        <p>
            Or export the flag once for the CLI:
        </p>
<pre>
<code>
export DRAGONSTONE_BACKEND=native
</code>
</pre>
        <p>
            To run files in terminals where Dragonstone has not been added to evn path (and terminals like Bash):
        </p>
<pre>
<code>
./bin/dragonstone.exe run examples/hello_world.ds
</code>
</pre>
    </section>

    <section class="docs-card" aria-labelledby="helpful-extensions">
        <h2 id="helpful-extensions">
            Helpful Extensions
        </h2>
        <ul class="docs-tags">
            <li>
                (Coming Soon...)
            </li>
        </ul>
    </section>
</section>

<style>
    .docs-hero {
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

    .docs-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }

    .docs-mini-card {
        padding: 1rem;
        border-radius: 8px;
        background: var(--bg-accent);
        border: var(--border-transparent);
    }

    .docs-mini-card h3 {
        margin: 0 0 0.5rem;
        font-size: 1.05rem;
    }

    .docs-steps {
        display: grid;
        gap: 0.75rem;
        padding-left: 1.1rem;
        margin: 0;
    }

    .docs-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .docs-tags li {
        padding: 0.4rem 0.9rem;
        border-radius: 8px;
        background: var(--bg-accent);
        font-size: 0.9rem;
    }
</style>
