export const fullScreen = () => {
  const ele = document.documentElement
  ele.requestFullscreen()
}

export const exitFullScreen = () => {
  document.exitFullscreen()
}