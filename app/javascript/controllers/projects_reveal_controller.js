import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["banner"]
  connect() {
    console.log("The 'projects reveal' controller is now loaded!")
  }

  reveal() {
    console.log("reveal");
    this.bannerTarget.classList.toggle("hidden");
  }
}
