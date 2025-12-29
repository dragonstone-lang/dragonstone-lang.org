import{f as s,a}from"../chunks/B2siLBbx.js";import"../chunks/Cwjy71xG.js";var t=s(`<section id="docs-content"><header class="docs-hero svelte-i3f8f4"><p class="docs-kicker svelte-i3f8f4">Getting Started</p> <h1>Quick Start</h1> <p class="docs-lede svelte-i3f8f4">Dragonstone is both an interpreted and compiled, high-level,
            object-oriented programming language. It uses <code>.ds</code> or <code>.dragonstone</code> for scripts, <code>.eds</code> for 
            embedded use, and <code>.forge</code> for package manifests.</p> <div class="docs-hero-actions svelte-i3f8f4"><a class="docs-pill svelte-i3f8f4" href="#installing-dragonstone">Install</a> <a class="docs-pill svelte-i3f8f4" href="#using-the-interpreter">Run</a></div></header> <section class="docs-card svelte-i3f8f4" aria-labelledby="file-extensions"><h2 id="file-extensions">Dragonstone File Extensions</h2> <div class="docs-grid svelte-i3f8f4"><div class="docs-mini-card svelte-i3f8f4"><h3 class="svelte-i3f8f4">.ds or .dragonstone</h3> <p>Standard source files for scripts and applications.</p></div> <div class="docs-mini-card svelte-i3f8f4"><h3 class="svelte-i3f8f4">.eds</h3> <p>Embedded scripts for integrations and tooling.</p></div> <div class="docs-mini-card svelte-i3f8f4"><h3 class="svelte-i3f8f4">.forge</h3> <p>Manifest used by the Forge package manager.</p></div></div></section> <section class="docs-card svelte-i3f8f4" aria-labelledby="forge-package-manager"><h2 id="forge-package-manager">Forge Package Manager</h2> <p>A typical Dragonstone project includes a <code>.forge</code> TOML file where you
            list metadata like name, version, authors, and dependencies. Think of it
            as the single source of truth for your project.</p> <pre><code>
# forge.toml
[package]
name = "your_project_name"
version = "0.1.0"
authors = "your_name_here"
</code>
</pre></section> <section class="docs-card svelte-i3f8f4" aria-labelledby="installing-dragonstone"><h2 id="installing-dragonstone">Installing Dragonstone</h2> <ol class="docs-steps svelte-i3f8f4"><li>Download the latest release for your platform. From the download page
                or via <a href="https://github.com/Vallereya/dragonstone">GitHub</a> and for full instructions.</li> <li>Add the Dragonstone binary to your PATH (if building from source).</li> <li>Verify the install by running <code>dragonstone --version</code>.</li></ol></section> <section class="docs-card svelte-i3f8f4" aria-labelledby="using-the-interpreter"><h2 id="using-the-interpreter">Using the Interpreter</h2> <p>Run a script directly to get instant feedback while prototyping.</p> <pre><code>
dragonstone run hello.ds
</code>
</pre></section> <section class="docs-card svelte-i3f8f4" aria-labelledby="using-the-compiler"><h2 id="using-the-compiler">Using the Compiler</h2> <p>Compile for production or distribution when you want a standalone
            binary. You can also pass the <code>--target</code> flag to specify
            your desired target such as <code>bytecode</code> or <code>llvm</code>.</p> <br/> <p>To build:</p> <pre><code>
dragonstone build hello.ds
</code>
</pre> <p>Or to build and run:</p> <pre><code>
dragonstone build-run hello.ds
</code>
</pre> <p>Select between native (interpreter) or core (compiler) backends.</p> <pre><code>
dragonstone run --backend native examples/hello_world.ds
</code>
</pre> <p>By default, dragonstone will use native (interpreter), however, you can change it anytime.</p> <pre><code>
export DRAGONSTONE_BACKEND=native dragonstone run examples/hello_world.ds
</code>
</pre> <p>Or export the flag once for the CLI:</p> <pre><code>
export DRAGONSTONE_BACKEND=native
</code>
</pre> <p>To run files in terminals where Dragonstone has not been added to evn path (and terminals like Bash):</p> <pre><code>
./bin/dragonstone.exe run examples/hello_world.ds
</code>
</pre></section> <section class="docs-card svelte-i3f8f4" aria-labelledby="helpful-extensions"><h2 id="helpful-extensions">Helpful Extensions</h2> <ul class="docs-tags svelte-i3f8f4"><li class="svelte-i3f8f4">(Coming Soon...)</li></ul></section></section>`);function n(e){var o=t();a(e,o)}export{n as component};
