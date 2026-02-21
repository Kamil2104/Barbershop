export const scrollTo = (id: string) => {
  const targetElement = document.getElementById(id)
  if (!targetElement) return

  const startY = window.scrollY
  const targetY = targetElement.getBoundingClientRect().top + startY
  const distance = targetY - startY
  const duration = 800
  let startTime: number | null = null

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutQuad(progress)

    window.scrollTo(0, startY + distance * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}