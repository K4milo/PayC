function imageBackground () {
  const imageSelector = document.querySelectorAll('.image-bg')

  if (imageSelector.length) {
    imageSelector.forEach(el => {
      const imageBg = el.querySelector('img')
      const imageSrc = imageBg.src
      el.style.backgroundImage = `url( ${imageSrc} )`
    })
  }
}

export {
  imageBackground
}
