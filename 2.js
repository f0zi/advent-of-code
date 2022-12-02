function sum(array) {
	return array.reduce((sum, n) => sum + n, 0)
}

const part1 = {
	A: { // Rock
		X: 3+1, // Rock: draw + 1
		Y: 6+2, // Paper: win + 2
		Z: 0+3, // Scissors: lose + 3
	},
	B: { // Paper
		X: 0+1, // Rock: lose + 1
		Y: 3+2, // Paper: draw + 2
		Z: 6+3, // Scissors: win + 3
	},
	C: { // Scissors
		X: 6+1, // Rock: win + 1
		Y: 0+2, // Paper: lose + 2
		Z: 3+3, // Scissors: draw + 3
	}
}

const part2 = {
	A: { // Rock
		X: 0+3, // lose: Scissors (3)
		Y: 3+1, // draw: Rock (1)
		Z: 6+2, // win: Paper (2)
	},
	B: { // Paper
		X: 0+1, // lose: Rock (1)
		Y: 3+2, // draw: Paper (2)
		Z: 6+3, // win: Scissors (3)
	},
	C: { // Scissors
		X: 0+2, // lose: Paper (2)
		Y: 3+3, // draw: Scissors (3)
		Z: 6+1, // win: Rock (1)
	}
}

function Guide(input) {
	return input.toString().split('\n').map(line => line.trim().split(/\W+/))
}

function RockPaperScissors1(input) {
	const guide = Guide(input)
	const scores = guide.map(round => part1[round[0]][round[1]])
	return sum(scores);
}

function RockPaperScissors2(input) {
	const guide = Guide(input)
	const scores = guide.map(round => part2[round[0]][round[1]])
	return sum(scores)
}

module.exports = { name: "Rock Paper Scissors", RockPaperScissors1, RockPaperScissors2 }

if(!module || require.main == module) {
	const fs = require('fs')
	const input = fs.readFileSync("2.input.txt", "utf8")
	console.log(RockPaperScissors1(input));
	console.log(RockPaperScissors2(input));
}
