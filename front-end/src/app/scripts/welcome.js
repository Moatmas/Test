// TODO #import-html: use ES default imports to import welcome.html as template
import template from "/src/app/views/welcome.html";

import { parseUrl } from "./utils";

// TODO #export-functions: remove the IIFE

    // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export function WelcomeComponent() {
    // TODO #extends: call super(template)
    this.template = template;
  }

  // TODO #class: turn function into a method of WelcomeComponent
  /* method WelcomeComponent.init */
  WelcomeComponent.prototype.init = function init() {
    let form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
      // TODO #arrow-function: use arrow function instead.
      (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          let name = event.srcElement.querySelector("#nickname").value;
          let size = parseInt(event.srcElement.querySelector("#size").value);

          _startGame(name, size);
        }
      },
      false
    );

    return this;
  };

  // TODO #class: turn function into a method of WelcomeComponent
  function _startGame(name, size) {
    // TODO #spa: replace with './#game'
    let gamePage = "./#game";
    window.location = `${gamePage} + "?name=" + ${name} + "&size=" + ${size}`;
  }

