<script>
	import favicon from '$lib/assets/favicon/apple-touch-icon.png';
</script>

<body>
	<nav>
		<a href="/">
			<img src={favicon} alt="logo" class="navlogo" />
		</a>

		<div class="navlinks">
			<a href="/#hot-games">🔥Hot🔥</a>
			<a href="/#action-games">Action</a>
			<a href="/#strategy-games">Strategy</a>
			<a href="/#sports-games">Sports</a>
			<a href="/#arcade-games">Arcade</a>
			<a href="/#puzzle-games">Puzzle</a>
			<a href="/#all-games">All Games</a>
		</div>
	</nav>

	<slot />

	<footer>
		<div class="footerdescription">
			<img src={favicon} alt="logo" class="footerlogo" />
			<span>HammerHead Games</span>
		</div>

		<h3 class="other-links-title">Legal Links</h3>

		<div class="otherlinks">
			<a href="/dmca" target="_blank" rel="follow noopener noreferrer">DMCA</a>
			<a href="/privacy-policy" target="_blank" rel="follow noopener noreferrer">Privacy Policy</a>
		</div>
	</footer>
</body>

<style>
	:root {
		/* Core Backgrounds - Modern gaming site colors */
		--bg-primary: #0f0f23;
		--bg-secondary: #1a1a2e;
		--bg-tertiary: #16213e;
		--background: #0f0f23;
		--surface-dark: #1a1a2e;
		--surface-light: #16213e;

		/* Accent Colors - Vibrant gaming colors */
		--accent-blue: #4ecdc4;
		--accent-green: #45b7d1;
		--accent-purple: #a55eea;
		--accent-orange: #fd79a8;
		--accent-yellow: #fdcb6e;

		/* Text Colors */
		--text-main: #ffffff;
		--text-secondary: #b8b8b8;
		--text-muted: #888888;
		--font-primary: #ffffff;
		--font-secondary: #b8b8b8;

		/* Interactive Colors */
		--hover-highlight: #4ecdc4;
		--button-primary: #4ecdc4;
		--button-hover: #45b7d1;
		--link-color: #4ecdc4;
		--link-hover: #45b7d1;

		/* Border and Shadow Colors */
		--border-light: rgba(255, 255, 255, 0.1);
		--border-medium: rgba(255, 255, 255, 0.2);
		--shadow-dark: rgba(0, 0, 0, 0.3);
		--shadow-light: rgba(0, 0, 0, 0.1);
	}

	/* Reset and base styles */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Arial', sans-serif;
		background-color: var(--background);
		color: var(--font-primary);
		line-height: 1.6;
	}

	nav {
		background-color: rgba(26, 26, 46, 0.9);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.4),
			0 0 0 1px rgba(255, 255, 255, 0.1);
		position: fixed;
		top: 20px;
		left: 20px;
		right: 20px;
		z-index: 1000;
		border-radius: 16px;
		border: 1px solid var(--border-light);
	}

	.navlogo {
		width: 40px;
		height: 40px;
		border-radius: 8px;
	}

	.navlinks {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.navlinks a {
		color: var(--font-primary);
		text-decoration: none;
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		transition: all 0.3s ease;
		font-weight: 600;
		font-size: 0.95rem;
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		border: 1px solid transparent;
	}

	.navlinks a:hover {
		background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3);
		border-color: var(--accent-blue);
	}

	.navlinks a::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
		transition: all 0.3s ease;
		transform: translateX(-50%);
	}

	.navlinks a:hover::before {
		width: 80%;
	}

	footer {
		background: linear-gradient(135deg, var(--surface-dark) 0%, var(--surface-light) 100%);
		padding: 2rem;
		margin-top: 2rem;
		text-align: center;
		border-top: 1px solid var(--border-light);
	}

	.footerdescription {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
		color: var(--font-primary);
	}

	.footerlogo {
		width: 30px;
		height: 30px;
		border-radius: 6px;
	}

	.other-links-title {
		margin-bottom: 1rem;
		color: var(--font-primary);
		font-weight: bold;
	}

	.otherlinks {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	.otherlinks a {
		color: var(--text-secondary);
		text-decoration: none;
		transition: all 0.3s ease;
		padding: 0.5rem 1rem;
		border-radius: 6px;
	}

	.otherlinks a:hover {
		color: var(--accent-blue);
		background-color: var(--surface-light);
		transform: translateY(-2px);
	}
</style>
