<script>
	import { Carousel, AllGames } from '$lib';
	import games from '$lib/data/games.json';

	const categories = ['Action', 'Strategy', 'Sports', 'Arcade', 'Puzzle'];

	// Group games by category
	function getGamesByCategory(cat) {
		return games.filter((g) => g.category?.toLowerCase() === cat.toLowerCase());
	}

	function getHotGames() {
		return games.filter((g) => g.hot);
	}
</script>

<main>
	<div id="categories">
		<Carousel title="Hot" list={getHotGames()} />
		{#each categories as cat}
			<Carousel title={cat} list={getGamesByCategory(cat)} />
		{/each}
	</div>

	<!-- All games grid -->
	<AllGames {games} />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(14, auto);
		gap: 2rem;
		padding: 2rem;
		max-width: 1400px;
		margin: 0 auto;
		margin-top: 120px; /* Increased top margin to account for detached header */
	}

	#categories {
		grid-column: 1 / -1;
		grid-row: 1 / 13;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(12, auto);
		gap: 2rem;
	}

	#hot-games {
		grid-row: 1 / 3;
	}

	#action-games {
		grid-row: 3 / 5;
	}

	#strategy-games {
		grid-row: 5 / 7;
	}

	#sports-games {
		grid-row: 7 / 9;
	}

	#arcade-games {
		grid-row: 9 / 11;
	}

	#puzzle-games {
		grid-row: 11 / 13;
	}
</style>
