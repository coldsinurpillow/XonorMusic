(()=> {
  const lang = document.querySelector('#lang')
  const locales = {
    ru: {
      home: "Домой",
      music: "Музыка",
      about: "Об исполнителе",
      xonorIn: "Xonor в SoundCloud и Spotify",
      aboutXonor: ""
    },
    en: {
      home: "Home",
      music: "Music",
      about: "About",
      xonorIn: "Xonor in SoundCloud and Spotify",
      aboutXonor: ""
    }
  }
  let locale = {}

  function changeLocale (locale) {
    const navItems = document.querySelector(".nav").children
    const homeContent = document.querySelector(".home-content")
    const about = document.querySelector(".about").lastElementChild
    console.log(homeContent)
    navItems[0].firstChild.innerText = locale.home
    navItems[1].firstChild.innerText = locale.music
    navItems[2].firstChild.innerText = locale.about
    homeContent.firstElementChild.innerText = locale.xonorIn
    about.innerText = locale.aboutXonor
  }

  lang.addEventListener("click", ()=> {
    if(lang.textContent === "Eng") {
      lang.textContent = "Rus"
      locale = locales.en
      changeLocale(locale)
    } else {
      lang.textContent = "Eng"
      locale = locales.ru
      changeLocale(locale)
    }
  })
})()