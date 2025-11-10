import { derived, type Readable } from 'svelte/store';
import { page } from '$app/stores';
import type { Page } from '@sveltejs/kit';

const routeTitles: Record<string, string> = {
    '/': 'The Dragonstone Programming Language',
    '/about': 'Dragonstone | About'
};

function formatPath(pathname: string): string {
    if (pathname === '/' || !pathname) return 'Dragonstone';

    const last = pathname
        .replace(/\/+$/, '')
        .split('/')
        .filter(Boolean)
        .pop() || '';

    const pretty = last.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

    return `Dragonstone | ${pretty}`;
}

export const title: Readable<string> = derived(page, ($page: Page) => {
    const fromData = $page?.data?.title as string | undefined;

    if (fromData) return fromData;
    const mapped = routeTitles[$page?.url?.pathname];

    if (mapped) return mapped;

    if (!$page?.url) return 'Dragonstone';

    return formatPath($page?.url?.pathname || '/');
});
