const dynamicSlider = document.querySelector('.slider')
let curSlide = 0
window.setInterval(() => {
  curSlide++
  if (curSlide === dynamicSlider.childElementCount) {
    curSlide = 0
  }
  dynamicSlider.firstElementChild.style.setProperty('margin-left', '-' + curSlide + '00%') // Actual slide  
}, 3000) // Slide every slideDelay seconds