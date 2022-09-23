
const header = document.querySelector('header')
const headerHeight = header.clientHeight
const root = document.querySelector(':root');
root.style.setProperty('--header-height', `${headerHeight}px`);

const twinkles = document.querySelectorAll('.twinkles span');
const random = [1,2,3,4,5,6]

randFunx =(randArr) => {
  let randNum = Math.floor(Math.random()* ((randArr.length-1)-0+1)) + 0;
  return randArr[randNum];
}

for (star of twinkles) {
  star.style.width = `${randFunx(random)}px`
}


const heroSection = document.querySelector(".hero-section")
const gameSection = document.querySelector(".game-section")
const marketPlace = document.querySelector(".market-place")


const navLink = document.querySelectorAll(".section-nav-links")

sectionOptions = {
  rootMargin: "-150px 0px 0px 0px"
}

const heroObserver = new IntersectionObserver(entry => {
  entry.forEach(entries => {
    if (!entries.isIntersecting) {
      header.classList.add("scroll-nav");
    } else {
      header.classList.remove("scroll-nav");
    }
  })
}, sectionOptions)
heroObserver.observe(heroSection)

// const gameObserver = new IntersectionObserver(entry => {
//   entry.forEach(entries => {
//     if (entries.isIntersecting) {
//       navLink[0].classList.add('nav-feat')
//     } else {
//       navLink[0].classList.remove('nav-feat')
//     }
//   })
// })
// gameObserver.observe(gameSection)

