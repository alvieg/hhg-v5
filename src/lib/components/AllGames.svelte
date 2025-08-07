<script>
	export let games = [];
	let link = '/game/';
</script>

<div id="all-games">
	<h3 class="category-title">All Games</h3>
	{#each games as game (game.name)}
		<div class="game-card">
			<a href={link + game.slug}>
				<!--<img src={game.image} alt="{game.name} image" class="game-image" title={game.name} />-->
				<h4 class="game-name">{game.name}</h4>
				<p class="game-creator">{game.creator}</p></a
			>
		</div>
	{/each}
</div>

<style>
	#all-games {
		grid-column: 1 / -1;
		grid-row: 13 / 15;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
		background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-light) 100%);
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 8px 32px var(--shadow-dark);
		border: 1px solid var(--border-light);
	}

	.game-card {
		background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-light) 100%);
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px var(--shadow-dark);
		border: 1px solid var(--border-light);
	}

	.game-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 32px var(--shadow-dark);
		border-color: var(--accent-blue);
	}

	.game-card a {
		text-decoration: none;
		color: inherit;
		display: block;
		padding: 1rem;
	}

	.game-card img {
		width: 100%;
		height: 120px;
		object-fit: cover;
		border-radius: 8px;
		margin-bottom: 0.5rem;
	}

	.game-name {
		font-weight: bold;
		color: var(--font-primary);
		margin-bottom: 0.25rem;
		font-size: 0.9rem;
	}

	.game-creator {
		color: var(--text-muted);
		font-size: 0.8rem;
	}

	#all-games .category-title {
		grid-column: 1 / -1;
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
