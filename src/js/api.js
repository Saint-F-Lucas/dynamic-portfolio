function updateProfileInfo(profileData) {
  const photo = document.querySelector('.header_image')
  photo.src = profileData.body.header.image.src
  photo.alt = profileData.body.header.image.alt

  const name = document.querySelector('.name_text')
  name.innerHTML = profileData.body.header.name

  const socialList = document.querySelectorAll('#social>li')
  socialList.forEach((item, index) => {
    const img = item.querySelector('img')
    const content = item.querySelector('span')

    img.src = profileData.body.header.social_links[index].icon
    try {
      content.innerHTML = profileData.body.header.social_links[index].text
    } catch (error) {}
    try {
      const link = item.querySelector('a')
      link.innerHTML = profileData.body.header.social_links[index].text
      link.href = profileData.body.header.social_links[index].href
    } catch (error) {}
  })
}

function updateSkills(profileData) {
  let imgUl = document.querySelector('.skills__imgList')
  profileData.skills.skills_content.profissionalSkills.items.forEach(item => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = item
    img.alt = item.name
    li.appendChild(img)
    imgUl.appendChild(li)
  })
  let textUl = document.querySelector('.skills__textList')
  profileData.skills.skills_content.personalSkills.items.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = item
    textUl.appendChild(li)
  })
}

function updateIdioms(profileData) {
  let ul = document.querySelector('.idioms__list')
  profileData.idioms.content.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = item
    ul.appendChild(li)
  })
}

function updateCouses(profileData) {
  let ul = document.querySelector('.courses__list')
  profileData.courses.forEach(item => {
    let li = document.createElement('li')
    let h4 = document.createElement('h4')
    let img = document.createElement('img')
    let p = document.createElement('p')
    h4.innerHTML = item.title
    img.src = item.image.src
    img.alt = item.image.alt
    p.innerHTML = item.date_content
    li.append(h4, img, p)
    ul.appendChild(li)
  })
}

function updateProjects(profileData) {
  let ul = document.querySelector('.projects__list')
  profileData.portfolio.forEach(item => {
    let li = document.createElement('li')
    let h4 = document.createElement('h4')
    let a = document.createElement('a')
    h4.innerHTML = item.title
    a.innerHTML = item.link.text
    a.href = item.link.href
    a.target = item.link.target
    li.append(h4, a)
    ul.appendChild(li)
  })
}

function updateExp(profileData) {
  let ul = document.querySelector('.exp__list')
  profileData.experience.content.items.forEach(item => {
    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let p2 = document.createElement('p')
    h3.innerHTML = item.title
    p.classList.add('date')
    p.innerHTML = item.date
    p2.innerHTML = item.text
    li.append(h3, p, p2)
    ul.appendChild(li)
  })
}

function fetchProfileData() {
  return fetch('./src/JSON/profile.json').then(response => response.json())
}

document.addEventListener('DOMContentLoaded', async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSkills(profileData)
  updateIdioms(profileData)
  updateCouses(profileData)
  updateProjects(profileData)
  updateExp(profileData)
})
