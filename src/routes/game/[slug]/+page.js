// +page.js
import games from '$lib/data/games.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const slug = decodeURIComponent(params.slug);
	const game = games.find((g) => g.slug === slug);

	if (!game) {
		throw error(404, 'Game not found');
	}

	return {
		game
	};
}
