<script>
	export let data;
	const { game } = data;
</script>

<svelte:head>
	<title>{game.name} - Play Free Online | HammerHead Games</title>
	<meta
		name="description"
		content={`Play ${game.name} by ${game.creator} and discover endless fun at HammerHead Games.`}
	/>
	<meta
		name="keywords"
		content={`free online games, HammerHead Games, gaming, play games, ${game.name}, ${game.creator}`}
	/>
	<link rel="canonical" href={`https://hammerhead-games.vercel.app/games/${game.slug}`} />
	<meta property="og:title" content={`${game.name} - Play Free Online | HammerHead Games`} />
	<meta
		property="og:description"
		content={`Play ${game.name} by ${game.creator} and discover endless fun at HammerHead Games.`}
	/>
	<meta property="og:url" content={`https://hammerhead-games.vercel.app/games/${game.slug}`} />
	<meta property="og:image" content={game.image} />
</svelte:head>

<main>
	<div id="game-area">
		<embed id="iframe" src={game.iframepath} allowfullscreen />
		<div
			id="mobile-back-button"
			draggable="true"
			on:click={() => {
				const iframe = document.getElementById('iframe');
				if (iframe?.requestFullscreen) iframe.requestFullscreen();
			}}
		>
			<i class="bi bi-x-circle-fill"></i>
		</div>
	</div>

	<div class="Tag">
		<div class="tagcontainer">
			<img class="TagImg" alt="Game Thumbnail" width="90" height="90" src={game.image} />
			<div class="TagTextContainer">
				<h1 class="TagGameName">{game.name}</h1>
				<h2 class="TagGameCreator">by {game.creator}</h2>
			</div>
		</div>
		<a
			href="#"
			id="no-animation"
			on:click={() => {
				const iframe = document.getElementById('iframe');
				if (iframe?.requestFullscreen) iframe.requestFullscreen();
			}}
		>
			<img src="$lib/assets/image/fullscreen.webp" class="FullscreenImg" alt="Fullscreen Icon" />
		</a>
	</div>
</main>

<style>
	main {
		max-width: 1200px;
		margin: 100px auto 50px; /* margin top for nav */
		padding: 0 1rem;
		color: var(--font-primary);
		font-family: Arial, sans-serif;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	#game-area {
		position: relative;
		width: 100%;
		padding-top: 56.25%; /* 16:9 aspect ratio */
		background-color: var(--surface-dark);
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 0 20px rgba(78, 205, 196, 0.3);
	}

	#game-area embed#iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 16px;
	}

	#mobile-back-button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: var(--accent-blue);
		color: white;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		user-select: none;
		box-shadow: 0 2px 8px var(--shadow-dark);
	}

	#mobile-back-button:hover {
		background: var(--accent-purple);
	}

	.Tag {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--surface-light);
		padding: 1rem 1.5rem;
		border-radius: 16px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.tagcontainer {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.TagImg {
		width: 90px;
		height: 90px;
		object-fit: cover;
		border-radius: 12px;
		box-shadow: 0 0 10px rgba(78, 205, 196, 0.3);
	}

	.TagTextContainer {
		display: flex;
		flex-direction: column;
	}

	.TagGameName {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--accent-blue);
		margin-bottom: 0.25rem;
	}

	.TagGameCreator {
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--text-secondary);
	}

	a#no-animation {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--accent-blue);
		padding: 0.6rem;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		box-shadow: 0 4px 15px rgba(78, 205, 196, 0.5);
		transition: background-color 0.3s ease;
		cursor: pointer;
	}

	a#no-animation:hover {
		background: var(--accent-purple);
	}

	.FullscreenImg {
		width: 26px;
		height: 26px;
		user-select: none;
		pointer-events: none;
	}

	@media (max-width: 700px) {
		main {
			margin: 80px 1rem 20px;
		}

		.Tag {
			flex-direction: column;
			gap: 1rem;
		}

		a#no-animation {
			width: 40px;
			height: 40px;
		}

		.TagImg {
			width: 70px;
			height: 70px;
		}

		.TagGameName {
			font-size: 1.4rem;
		}
	}
</style>
