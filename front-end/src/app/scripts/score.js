// TODO #import-html: use ES default imports to import game.html as template
import template from "/src/app/views/score.html";

import { parseUrl } from "/src/app/scripts/utils.js";

  // TODO #class: use the ES6 class keyword
  /* class ScoreComponent constructor */
  export function ScoreComponent() {
    // TODO #extends: call super(template)
    let params = parseUrl();
    this.template = template;
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }


  // TODO #class: turn function into a method of ScoreComponent
  /* method ScoreComponent.init */
  ScoreComponent.prototype.init = function init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };

