<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import games from '$lib/data/games.json';

	export let data;
	let game = data.game;

	let gameName = game?.name ?? "Game Not Found";
	let creatorName = game?.creator ?? "Unknown Creator";
	let gamePath = `/assets/games/${game?.path}/index.html`;
	let gameImg = game?.thumbnail ?? "/assets/favicon/favicon-96x96.png";

	onMount(() => {
		document.querySelector(".TagGameName").textContent = gameName;
		document.querySelector(".TagGameCreator").textContent = creatorName;
		document.querySelector(".TagImg").setAttribute("src", gameImg);
		document.querySelector("#iframe").setAttribute("src", gamePath);
	});
</script>

<svelte:head>
	<title>{gameName} - Play Free Online | HammerHead Games</title>
	<meta name="description" content={`Play ${gameName} by ${creatorName} and discover endless fun at HammerHead Games. No downloads, no popups, just instant browser gaming!`} />
	<meta name="keywords" content={`free online games, HammerHead Games, gaming, play games, ${gameName}, ${creatorName}`} />
	<link rel="canonical" href={`https://hammerhead-games.vercel.app/games/${game.path}`} />
	<meta property="og:title" content={`${gameName} - Play Free Online | HammerHead Games`} />
	<meta property="og:description" content={`Play ${gameName} by ${creatorName} and discover endless fun at HammerHead Games.`} />
	<meta property="og:url" content={`https://hammerhead-games.vercel.app/games/${game.path}`} />
	<meta property="og:image" content={gameImg} />
</svelte:head>

<main>
	<div id="game-area">
		<embed id="iframe" />
		<div
			id="mobile-back-button"
			draggable="true"
			on:click={() => {
				const iframe = document.getElementById('iframe');
				if (iframe?.requestFullscreen) iframe.requestFullscreen();
			}}>
			<i class="bi bi-x-circle-fill"></i>
		</div>
	</div>

	<div class="Tag">
		<div class="tagcontainer">
			<img class="TagImg" alt="Game Thumbnail" width="90" height="90" />
			<div class="TagTextContainer">
				<h1 class="TagGameName"></h1>
				<h2 class="TagGameCreator"></h2>
			</div>
		</div>
		<a href="#" id="no-animation" on:click={() => {
			const iframe = document.getElementById('iframe');
			if (iframe?.requestFullscreen) iframe.requestFullscreen();
		}}>
			<img
				src="/assets/image/fullscreen.webp"
				class="FullscreenImg"
				alt="Fullscreen Icon"
			/>
		</a>
	</div>
</main>
