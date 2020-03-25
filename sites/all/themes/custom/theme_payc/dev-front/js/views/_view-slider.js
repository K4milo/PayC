import { HeroSlider } from '../components/_slider'

function buildSlider () {
  const selector = $('.view-slider .view-content')
  const paramSlider = {
    arrows: true,
    dots: true
  }
  const slider = new HeroSlider(paramSlider, selector)
  slider.initSlider()
}

export {
  buildSlider
}
