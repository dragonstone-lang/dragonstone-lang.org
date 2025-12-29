import { createHighlighter, type Highlighter, type LanguageRegistration } from "shiki";
import dragonstoneGrammar from "$lib/modules/dragonstone.tmLanguage.json";

let highlighterPromise: Promise<Highlighter> | null = null;

const dragonstoneLanguage = {
    ...dragonstoneGrammar,
    name: "dragonstone",
    displayName: "Dragonstone",
    aliases: ["ds", "eds"]
} as LanguageRegistration;

async function getHighlighter() {
    highlighterPromise ??= createHighlighter({
        themes: ["catppuccin-latte", "catppuccin-mocha"],
        langs: ["ruby", dragonstoneLanguage],
    });

    return highlighterPromise;
}

export async function highlight(code: string, lang: "ruby" | "dragonstone" = "dragonstone") {
    const highlighter = await getHighlighter();
    return highlighter.codeToHtml(code, { 
        lang,
        themes: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha"
        },
        defaultColor: "light-dark()",
        cssVariablePrefix: "--shiki-"
    });
}

export async function highlightDocs(code: string, lang: "dragonstone" | "ruby" = "dragonstone") {
    return highlight(code, lang);
}
