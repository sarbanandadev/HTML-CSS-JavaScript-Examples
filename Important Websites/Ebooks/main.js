const data01 = document.querySelector('#data01')

let Websites = [
 {
   name: 'Bangla Book',
   link: 'https://www.banglabook.org/',
   logo: 'https://www.banglabook.org/wp-content/uploads/2016/10/logo-300x138.webp',
   free: true
 }
]

let res = ''

for (var i = 0; i < Websites.length; i++) {
  res += `<div><a href='${Websites[i].link}'><img src='${Websites[i].logo}'><h3>${Websites[i].name}</h3></a><p>${Websites[i].free = true ? 'Free' : 'Not Free'}</p></div>`
}

data01.innerHTML = res