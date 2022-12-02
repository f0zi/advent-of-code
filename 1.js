
function sum(array) {
	return array.reduce((sum, n) => sum + n, 0)
}

function CalorieCounting(input, n = 1) {
	var numbers = input.toString().split(/\r?\n\r?\n/).map(s => s.trim()).map(pack => pack.split(/\W+/).map(s => parseInt(s)));
	var sums = numbers.map(sum)
	return sums.sort((a, b) => b-a).slice(0, n)
}

function CalorieCounting1(input) {
	return CalorieCounting(input)[0] || 0
}

function CalorieCounting2(input) {
	return sum(CalorieCounting(input, 3))
}

module.exports = { name: "Calorie Counting", CalorieCounting1, CalorieCounting2 }

if(!module || require.main == module) {
	const fs = require('fs')
	const input = fs.readFileSync("1.input.txt", "utf8")
	console.log(CalorieCounting1(input))
	console.log(CalorieCounting2(input))
}
