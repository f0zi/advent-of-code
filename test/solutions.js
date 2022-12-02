const { expect } = require('chai')

const fs = require('fs')

describe("Solutions", function() {
	fs.readdirSync(__dirname + '/..').filter(name => /^\d+\.js$/.test(name)).forEach(name => {
		const testee = require(`../${name}`)
		const input = fs.readFileSync(`${__dirname}/../${name.replace('js', 'input.txt')}`, 'utf8')
		describe(testee.name || name.replace('.js', ''), function() {
			Object.keys(testee).filter(name => typeof testee[name] == 'function').forEach(name => it(name, function() {
				const solution = testee[name](input)
				expect(solution).to.not.be.undefined
				console.log("Solution: ", solution)
			}))
		})
	})
})
