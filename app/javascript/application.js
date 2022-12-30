// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

import { Application } from "@hotwired/stimulus"
import ScrollTo from 'stimulus-scroll-to'

const application = Application.start()
application.register('scroll-to', ScrollTo)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

let path = document.querySelector('path')
let linesLength = path.getTotalLength()
console.log(linesLength);
path.style.strokeDasharray = linesLength + ' ' + linesLength;
path.style.strokeDashoffset = linesLength;

window.addEventListener('scroll', () => {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  let drawLength = linesLength * scrollPercentage;
  path.style.strokeDashoffset = linesLength - drawLength;
})
