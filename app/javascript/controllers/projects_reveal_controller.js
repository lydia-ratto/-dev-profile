import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["banner", "image"]
  connect() {
    console.log("The 'projects reveal' controller is now loaded!")

    const reveal = (event) => {
      event.currentTarget.children[3].classList.toggle("hidden")
      // event.currentTarget.children[1].classList.toggle("active")

    }

    this.imageTargets.forEach(element => {
      element.addEventListener("click", reveal)
    });
  }
}
