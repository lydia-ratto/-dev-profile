import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // static targets = ["lines"]
  connect() {
    console.log("The 'line-scroll' controller is now loaded!")
  }

  scroll() {
    // let linesLength = this.linesTarget.getTotalLength()
    // console.log(linesLength);
    // this.linesTarget.style.strokeDasharray = linesLength + ' ' + linesLength;
    // this.linesTarget.style.strokeDashoffset = linesLength;

    // let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // let drawLength = linesLength * scrollPercentage;
    // this.linesTarget.style.strokeDashoffset = linesLength - drawLength;
  }
}
