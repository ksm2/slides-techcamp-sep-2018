/**
 * @param {HTMLElement} el
 * @param {number} delay
 */
function shootingStar(el, delay) {
  setTimeout(() => {
    const topPos = Math.ceil(Math.random() * 90)
    const leftPos = Math.ceil(Math.random() * 100)
    const trans = Math.ceil(Math.random() * 300)
    el.style.top = `${topPos}%`
    el.style.left = `${leftPos}%`
    el.style.transform = `rotate(${trans}deg)`
    el.classList.add('shoot')
  }, delay)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.shooting-star').forEach((element) => {
    shootingStar(element, 1000 + Math.floor(Math.random() * 5000))
  })
})
