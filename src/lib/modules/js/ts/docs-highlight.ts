import { highlightDocs } from "$ts/shiki";

function escapeHtml(code: string) {
    return code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function highlightDoc(code: string) {
    try {
        return await highlightDocs(code);
    } catch (error) {
        const preview = code.trim().split("\n")[0] ?? "";
        console.error("[docs-highlight] Dragonstone highlight failed:", preview, error);
        return `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;
    }
}

export async function highlightDocWithLang(code: string, lang: "dragonstone" | "ruby") {
    try {
        return await highlightDocs(code, lang);
    } catch (error) {
        const preview = code.trim().split("\n")[0] ?? "";
        console.error("[docs-highlight] Highlight failed:", lang, preview, error);
        return `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;
    }
}
