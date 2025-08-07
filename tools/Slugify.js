// add-slugs.js
import fs from 'fs'

// Slugify: convert name to kebab-case
function slugify(name) {
	return name
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')  // remove non-word characters
		.replace(/\s+/g, '-')      // replace spaces with hyphens
		.trim();
}

// Read the game list
const raw = fs.readFileSync('games.json', 'utf-8');
const games = JSON.parse(raw);

// Add slug to each game
const updated = games.map(game => ({
	...game,
	slug: slugify(game.name)
}));

// Write to a new file
fs.writeFileSync('games-with-slugs.json', JSON.stringify(updated, null, 2));

console.log('✅ Slugs added! Output: games-with-slugs.json');
