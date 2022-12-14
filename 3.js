function sum(array) {
	return array.reduce((sum, n) => sum + n, 0)
}

function intersection(...sets) {
	const result = []
	for(const i = sets.map(() => 0) ; i.every((i, set) => i < sets[set].length);) {
		const best = i.reduce((best, i, set) => {
			if(best.item && sets[set][i] == best.item) {
				best.sets.push(set)
			} else if(!best.item || sets[set][i] < best.item) {
				best = {
					item: sets[set][i],
					sets: [ set ]
				}
			}
			return best
		}, {})

		if(best.sets.length == sets.length) {
			result.push(best.item)
		}

		best.sets.forEach(set => {
			do { ++i[set] } while(sets[set][i[set]] == best.item)
		})
	}

	return result;
}

const lowerOffset = 'a'.charCodeAt(0) - 1
const upperOffset = lowerOffset - 'A'.charCodeAt(0) + 27

function priority(s) {
	var p = s.charCodeAt(0) - lowerOffset
	if(p<0) p += upperOffset
	return p
}

function RucksackReorganization1(input) {
	const lines = input.toString().split('\n').map(s => s.trim())
	const pairs = lines.map(line => [ line.substr(0, line.length/2), line.substr(line.length/2) ])
	const sorted = pairs.map(([a, b]) => [ a.split('').sort(), b.split('').sort()])
	const intersected = sorted.map(pair => intersection(...pair).join(''))
	const priorities = intersected.map(priority)
	return sum(priorities)
}

function RucksackReorganization2(input) {
	const lines = input.toString().split('\n').map(s => s.trim())
	const sorted = lines.map(line => line.split('').sort())
	const groups = sorted.reduce((groups, item) => {
		if(groups.length && groups[groups.length-1].length < 3) groups[groups.length-1].push(item);
		else groups.push([ item ])
		return groups
	}, [])
	const intersected = groups.map(group => intersection(...group).join(''))
	const priorities = intersected.map(priority)
	return sum(priorities)
}


module.exports = { name: "Rucksack Reorganization", RucksackReorganization1, RucksackReorganization2 }

if(!module || require.main == module) {
	const fs = require('fs')
	const input = fs.readFileSync("3.input.txt", "utf8")
	console.log(RucksackReorganization1(input))
	console.log(RucksackReorganization2(input))
}
