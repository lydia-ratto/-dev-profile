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
