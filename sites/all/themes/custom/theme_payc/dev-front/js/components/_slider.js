import $ from 'jquery'
import 'slick-carousel'
window.$ = window.jQuery = $

class HeroSlider {
  constructor ($params, $selector) {
    this.params = {
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      accessibility: true,
      autoplay: false,
      infinite: false,
      // if watchAria is set to true, the carousel will set the aria-hidden=true
      // attr to the current slide
      watchAria: false,
      speed: 700,
      ...$params,
    }
    this.selector = $selector
  }

  initSlider () {
    const element = this.selector
    const paramSlider = this.params
    if (element.length) {
      element.slick(paramSlider)
    }
  }
}

export {
  HeroSlider
}
