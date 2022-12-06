function Stacks(input) {
	const lines = input.split(/\r?\n/)
	this.stacks = lines.pop().trim().split(/\W+/)

	Object.assign(this, this.stacks.reduce((o,k) => {
		o[k] = []
		return o
	}, {}))

	for(const line of lines) {
		line
		.split(/(?:\[(\w)\]|   ) ?/)
		.filter(s => s !== '')
		.forEach((val, i) => val ? this[this.stacks[i]].unshift(val) : 0)
	}
}

Stacks.prototype = {
	move(n, from, to) {
		this[to].push(...this[from].splice(-n, n).reverse())
	},

	move2(n, from, to) {
		this[to].push(...this[from].splice(-n, n))
	},

	topmost() {
		return this.stacks.map(name => this[name][this[name].length-1])
	}
}

function SupplyStacks1(input) {
	const [drawing, rest] = input.toString().split(/\r?\n\r?\n/);
	const stacks = new Stacks(drawing)
	moves = rest
	.split(/\r?\n/)
	.map(line => /move (\d+) from (\d+) to (\d+)/.exec(line))
	.map(match => [ parseInt(match[1]), match[2], match[3]])
	for(const [n, from, to] of moves) {
		stacks.move(n, from, to)
	}
	return stacks.topmost().join('')
}

function SupplyStacks2(input) {
	const [drawing, rest] = input.toString().split(/\r?\n\r?\n/);
	const stacks = new Stacks(drawing)
	moves = rest
	.split(/\r?\n/)
	.map(line => /move (\d+) from (\d+) to (\d+)/.exec(line))
	.map(match => [ parseInt(match[1]), match[2], match[3]])
	for(const [n, from, to] of moves) {
		stacks.move2(n, from, to)
	}
	return stacks.topmost().join('')
}

module.exports = { name: "Supply Stacks", SupplyStacks1, SupplyStacks2 }

const example = `    [D]    
[N] [C]    
[Z] [M] [P]
1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

if(!module || require.main == module) {
	const fs = require('fs')
	const input = fs.readFileSync("5.input.txt", "utf8")
	console.log(SupplyStacks1(input))
	console.log(SupplyStacks2(input))
}
