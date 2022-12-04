function sum(array) {
	return array.reduce((sum, n) => sum + n, 0)
}

function contains(a, b) {
	return (a[0] <= b[0] && a[1] >= b[1]) ||
		(b[0] <= a[0] && b[1] >= a[1])
}

function overlap(a, b) {
	return a[0] <= b[0] && a[1] >= b[0] ||
		a[0] <= b[1] && a[1] >= b[1] ||
		b[0] <= a[0] && b[1] >= a[0] ||
		b[0] <= a[1] && b[1] >= a[1]
}

function CampCleanup1(input) {
	const lines = input.toString().split('\n').map(s => s.trim())
	const pairs = lines.map(line => line.split(','))
	const ranges = pairs.map(pair => pair.map(s => /(\d+)-(\d+)/.exec(s)).map(m => [parseInt(m[1]), parseInt(m[2])]))
	const cont = ranges.map(range => contains(...range)).map(b => b?1:0)
	return sum(cont)
}

function CampCleanup2(input) {
	const lines = input.toString().split('\n').map(s => s.trim())
	const pairs = lines.map(line => line.split(','))
	const ranges = pairs.map(pair => pair.map(s => /(\d+)-(\d+)/.exec(s)).map(m => [parseInt(m[1]), parseInt(m[2])]))
	const overl = ranges.map(range => overlap(...range)).map(b => b?1:0)
	return sum(overl)
}

module.exports = { name: "Camp Cleanup", CampCleanup1, CampCleanup2 }

if(!module || require.main == module) {
	const fs = require('fs')
	const input = fs.readFileSync("4.input.txt", "utf8")
	console.log(CampCleanup1(input))
	console.log(CampCleanup2(input))
}
