
import { Application } from "@hotwired/stimulus"
import ScrollTo from 'stimulus-scroll-to'

const application = Application.start()

application.register('scroll-to', ScrollTo)

let paths = document.querySelectorAll('path')

window.addEventListener('scroll', () => {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  for (var i = 0; i < paths.length; i++) {
    let path = paths[i];
    console.log(path);
    let linesLength = path.getTotalLength();
    let drawLength = linesLength * scrollPercentage;
    path.style.strokeDasharray = linesLength + ' ' + linesLength;
    path.style.strokeDashoffset = linesLength;
    path.style.strokeDashoffset = linesLength - drawLength;
  }
})
