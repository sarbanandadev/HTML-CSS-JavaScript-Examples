let accBtn = document.getElementsByClassName('acc-btn')

for (let acc = 0; acc < accBtn.length; acc++) {
  accBtn[acc].addEventListener('click', function() {
    this.classList.toggle('acc-active')
    let accPanel = this.nextElementSibling
    if (accPanel.style.maxHeight) {
      accPanel.style.maxHeight = null
    } else {
      accPanel.style.maxHeight = accPanel.scrollHeight + 'px'
    }
  })
}