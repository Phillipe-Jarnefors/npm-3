import countUp from "package-1-pj"
import countDown from "package-2-pj"

function countReset() {
  countUp(-1)
  countDown(1)
}

module.exports = countReset
