const countUp = require("package-1-pj")
const countDown = require("package-2-pj")

function countReset(num) {
  return (num = 0)
}

module.exports = { countReset, countDown, countUp }
