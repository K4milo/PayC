import $ from 'jquery'
import { buildSlider } from './views/_view-slider'
import { imageBackground } from './sideffects'
window.$ = window.jQuery = $

function init () {
  imageBackground()
  buildSlider()
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})
