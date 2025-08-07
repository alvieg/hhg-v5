<script>
	import { onMount } from 'svelte';

	export let title = '';
	export let list = [];
	let link = '/game/';
	function initCarouselAutoplay() {
		const track = document.querySelector('.carousel-track');
		if (!track) {
			console.warn(`Carousel track not found: ${selector}`);
			return;
		}

		const cards = track.querySelectorAll('.carousel-card');
		if (cards.length === 0) {
			console.warn(`No cards found in carousel: ${selector}`);
			return;
		}

		let current = 0;
		let interval;

		function update() {
			cards.forEach((card, i) => {
				// Add 60px offset to account for arrow buttons (40px button + 15px margin + 5px buffer)
				card.style.transform = `translateX(${(i - current) * 220 + 60}px)`;
				card.style.opacity = i === current ? '1' : '0.7';
				card.classList.toggle('active', i === current);
			});
		}

		function next() {
			current = (current + 1) % cards.length;
			update();
		}

		function prev() {
			current = (current - 1 + cards.length) % cards.length;
			update();
		}

		// Add navigation buttons if they exist
		const container = track.closest('.carousel');
		const prevBtn = container?.querySelector('.arrow.left');
		const nextBtn = container?.querySelector('.arrow.right');

		if (prevBtn) prevBtn.addEventListener('click', prev);
		if (nextBtn) nextBtn.addEventListener('click', next);

		update(); // initial render
		interval = setInterval(next, 3000);

		// Return cleanup function
		return () => {
			if (interval) clearInterval(interval);
			if (prevBtn) prevBtn.removeEventListener('click', prev);
			if (nextBtn) nextBtn.removeEventListener('click', next);
		};
	}

	onMount(() => {
		initCarouselAutoplay()
	});
</script>

<div id="{title}-games" class="carousel">
	<h3 class="category-title">{title} Games</h3>
	<button class="arrow left">‹</button>
	<div class="carousel-track">
		{#each list as item}
			<div class="carousel-card">
				<a href={link + item.slug}>
					<!--<img src={item.image} alt="{item.name} image" title={item.name} class="game-image" />-->
					<div class="game-img">
						<h3 class="game-title">{item.name}</h3>
					</div>
				</a>
			</div>
		{/each}
	</div>
	<button class="arrow right">›</button>
	<!--{title} Games Carousel from json-->
</div>

<style>
	.carousel {
		grid-column: 1 / -1;
		background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-light) 100%);
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 8px 32px var(--shadow-dark);
		position: relative;
		overflow: hidden;
		border: 1px solid var(--border-light);
	}

	.category-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1rem;
		color: var(--font-primary);
		text-shadow: 0 2px 4px var(--shadow-dark);
		background: linear-gradient(45deg, var(--accent-blue), var(--accent-purple));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	/* Carousel track */
	.carousel-track {
		display: flex;
		gap: 10px;
		overflow-x: auto;
		scroll-behavior: smooth;
		padding: 0.5rem 60px; /* Add horizontal padding to account for arrow buttons */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE and Edge */
	}

	.carousel-track::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}

	/* Carousel cards */
	.carousel-card {
		flex: 0 0 180px;
		background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-light) 100%);
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px var(--shadow-dark);
		border: 1px solid var(--border-light);
	}

	.carousel-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 12px 40px var(--shadow-dark);
		border-color: var(--accent-blue);
	}

	.carousel-card a {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.game-img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		border-radius: 12px;
		transition: transform 0.3s ease;
	}

	.game-img {
		transform: scale(1.05);
	}

	.game-title {
		text-align: center;
		font-size: 2rem;
		justify-self: center;
	}

	.game-creator {
		text-align: center;
		font-size: 1rem;
	}

	/* Carousel navigation arrows */
	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
		color: white;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px var(--shadow-dark);
	}

	.arrow:hover {
		transform: translateY(-50%) scale(1.1);
		box-shadow: 0 6px 20px var(--shadow-dark);
	}

	.arrow.left {
		left: 15px;
		z-index: 10;
	}

	.arrow.right {
		right: 15px;
		z-index: 10;
	}
</style>
