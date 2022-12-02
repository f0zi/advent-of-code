function sum(array) {
	return array.reduce((sum, n) => sum + n, 0)
}

const Rock = { name: "Rock", score: 1, Scissors: true, Paper: false }
const Paper = { name: "Paper", score: 2, Rock: true, Scissors: false }
const Scissors = { name: "Scissors", score: 3, Paper: true, Rock: false }

for(var x of [Rock, Paper, Scissors]) {
	for(var y of [Rock, Paper, Scissors]) {
		if(x == y) x.draw = y;
		else if(x[y.name]) x.win = y;
		else x.lose = y;
	}
}

const Names = {
	Rock, Paper, Scissors,
	A: Rock, X: Rock,
	B: Paper, Y: Paper,
	C: Scissors, Z: Scissors,
}

const Goals = {
	X: 'win', Y: 'draw', Z: 'lose'
}

function score(other, mine) {
	other = Names[other]
	mine = Names[mine]
	const draw = mine == other
	const win = !draw && mine[other.name]
	return (draw ? 3 : (win ? 6 : 0)) + mine.score
}

function Guide(input) {
	return input.toString().split('\n').map(line => line.trim().split(/\W+/))
}

function RockPaperScissors1(input) {
	const guide = Guide(input)
	const scores = guide.map(round => score(...round))
	return sum(scores);
}

function RockPaperScissors2(input) {
	const guide = Guide(input)
	const scores = guide.map(round => {
		var [ other, mine ] = round;
		other = Names[other];
		mine = other[Goals[mine]];
		return score(other.name, mine.name)
	})
	return sum(scores)
}

module.exports = { name: "Rock Paper Scissors", RockPaperScissors1, RockPaperScissors2 }

if(!module || require.main == module) {
	const fs = require('fs')
	const input = fs.readFileSync("2.input.txt", "utf8")
	console.log(RockPaperScissors1(input));
	console.log(RockPaperScissors2(input));
}
