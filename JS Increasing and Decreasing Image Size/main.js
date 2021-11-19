let ZoomInOut = document.getElementById('ZoomInOut')

function zoomin() {
  let currWidth = ZoomInOut.clientWidth
  if (currWidth == 500) {
    alert('Maximum zoom-in level reached.')
  } else {
    ZoomInOut.style.width = (currWidth + 50) + 'px'
  }
}

function zoomout() {
  let currWidth = ZoomInOut.clientWidth
  if (currWidth == 50) {
    alert('Maximum zoom-out level reached.')
  } else {
    ZoomInOut.style.width = (currWidth - 50) + 'px'
  }
}