import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // static targets = ["lines"]
  connect() {
    console.log("The 'line-scroll' controller is now loaded!")
  }

}
