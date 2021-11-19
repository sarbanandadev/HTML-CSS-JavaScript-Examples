const ldrDefault = document.querySelector('.loader-default')
const ldrSmallCircle = document.querySelector('.loader-circle-small')
const ldrBigCircle = document.querySelector('.loader-circle-big')

const loader = null
switch (loader) {
  case 1:
    ldrSmallCircle.innerHTML = `<circle cx="25" cy="25" r="25"></circle>`
    break

  case 2:
    ldrBigCircle.innerHTML = `<circle cx="45" cy="45" r="45"></circle>`
    break

  default:
    let result = [],
      x = `<rect width='7' height='20' x='46.5' y='40' rx='5' ry='5' transform='rotate(`,
      y = `50 50) translate(0 -30)'><animate attributeName='opacity' repeatCount='indefinite' from='1' to='0' dur='1s' begin='0.`,
      z = `s'/></rect>`
    for (let i = 0; i < 10; i++) {
      result += x + i * 36 + ' ' + y + i + z
    }
    ldrDefault.innerHTML = result
}