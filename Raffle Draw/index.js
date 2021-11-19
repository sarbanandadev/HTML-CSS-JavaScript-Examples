window.onload = function() {
  const input = document.getElementById('input')
  const nameList = document.getElementById('name-list')
  const display = document.getElementById('display')
  const giveATry = document.getElementById('give-a-try')
  const firstPosition = document.getElementById('first-position')
  const secondPosition = document.getElementById('second-position')
  const thirdPosition = document.getElementById('third-position')

  const participantNames = []

  // Extract Text from TextArea and Store it to an Array
  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      let newNames = event.target.value.split(', ')
      // console.log(newNames) // return a Names Array
      if (newNames[0] !== '') { // !===
        // console.log(newNames) // return a Empty Array
        newNames.forEach(name => {
          participantNames.push(name)

          let item = createListItem(name)
          nameList.appendChild(item)
          event.target.value = ''
        })
      }
    }
  })

  giveATry.addEventListener('click', function() {
    if (participantNames.length === 0) {
      alert('There is No Entry!')
    } else {
      let shuffleNames = shuffle(participantNames)

      for (var i = 0; i < shuffleNames.length; i++) {
        (function(i, count) {

          setTimeout(() => {
            let rand = Math.floor(Math.random() * (shuffleNames.length))
            display.innerHTML = shuffleNames[rand]

            if (count === shuffleNames.length - 1) {
              if (!firstPosition.innerHTML) {
                firstPosition.innerHTML = shuffleNames[rand]
                let index = participantNames.indexOf(shuffleNames[rand])
                participantNames.splice(index, 1)
              } else if (!secondPosition.innerHTML) {
                secondPosition.innerHTML = shuffleNames[rand]
                let index = participantNames.indexOf(shuffleNames[rand])
                participantNames.splice(index, 1)
              } else if (!thirdPosition.innerHTML) {
                thirdPosition.innerHTML = shuffleNames[rand]
                let index = participantNames.indexOf(shuffleNames[rand])
                participantNames.splice(index, 1)
              } else {
                alert('Raffle Draw Already Completed')
              }
            }

          }, i)

        })(i * 100, i)
      }
    }
  })
}


// Render The Names Extracted from TextArea
function createListItem(name) {
  let li = document.createElement('li')
  li.className = 'list-group-item'
  li.innerHTML = name
  return li
}

function shuffle(arr) {
  let shuffleArr = [...arr]

  for (var i = 0; i < shuffleArr.length; i++) {
    let rand = Math.floor(Math.random() * (i + 1))
    let temp = shuffleArr[rand]
    shuffleArr[rand] = shuffleArr[i]
    shuffleArr[i] = temp
  }
  return shuffleArr
}

// console.log(shuffle([1,2,3,4,5,6,7,8,9]))
// console.log(shuffle([1,2,3,4,5,6,7,8,9]))
// console.log(shuffle([1,2,3,4,5,6,7,8,9]))
// console.log(shuffle([1,2,3,4,5,6,7,8,9]))
// console.log(shuffle([1,2,3,4,5,6,7,8,9]))