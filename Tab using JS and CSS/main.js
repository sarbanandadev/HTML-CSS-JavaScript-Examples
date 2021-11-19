function openTab(evnt, tabName) {
  let tabContent, tabBtn
  tabContent = document.getElementsByClassName('tab-content')
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none'
  }
  tabBtn = document.getElementsByClassName('tab-btn')
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].className = tabBtn[i].className.replace(' tab-active', '')
  }
  document.getElementById(tabName).style.display = 'block'
  evnt.currentTarget.className += ' tab-active'
}
document.getElementById('tabActive').click()