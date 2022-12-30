
import { Application } from "@hotwired/stimulus"
import ScrollTo from 'stimulus-scroll-to'

const application = Application.start()

application.register('scroll-to', ScrollTo)

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
