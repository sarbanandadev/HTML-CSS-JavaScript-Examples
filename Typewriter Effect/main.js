const textAll = document.querySelectorAll(".typewriter-effect p")
let textNo = 1

const removeTextClasses = () => {
  textAll.forEach((t) => {
    t.classList.remove("active")
  })
}

textAll[0].classList.add("active")

setInterval(() => {
  removeTextClasses()
  if (textNo > textAll.length - 1) {
    textNo = 0
  }

  textAll[textNo].classList.add("active")
  textNo++
}, 4000)