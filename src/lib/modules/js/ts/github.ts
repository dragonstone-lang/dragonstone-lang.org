type GitHubTag = {
    name: string;
    commit: { sha: string; url: string };
    zipball_url: string;
    tarball_url: string;
    node_id?: string;
};

export async function getFirstTagNamePart(): Promise<{
    tagName: string;
    firstPart: string;
}> {
    const url = "https://api.github.com/repos/Vallereya/dragonstone/tags";

    const res = await fetch(url, {
        headers: { Accept: "application/vnd.github+json" },
    });

    if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const tags = (await res.json()) as GitHubTag[];

    if (!Array.isArray(tags) || tags.length === 0) {
        throw new Error("No tags found.");
    }

    const tagName = tags[0].name;
    const firstPart = extractFirstPart(tagName);
    return { tagName, firstPart };
}

// Optionally extracts the first part of a tag name
// ex: "v0.1.3" -> "0.1.3"
// Might be useful for categorizing versions later.
export function extractFirstPart(tagName: string): string {

    // Drop a leading "v"
    const cleaned = tagName.replace(/^v/i, "");

    // Split on common separators: dot, dash, underscore, slash, whitespace
    const parts = cleaned.split(/[.\-_/ \t]+/).filter(Boolean);

    return parts[0] ?? cleaned;
}
