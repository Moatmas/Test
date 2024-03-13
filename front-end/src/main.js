import {Router} from "/src/app/scripts/router.js"
import {WelcomeComponent} from "/src/app/scripts/welcome.js"
import {GameComponent} from "/src/app/scripts/game.js"
import {ScoreComponent} from "/src/app/scripts/score.js"

import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet); 
router
  .register("", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("welcome", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("game", {
    component: GameComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("score", {
    component: ScoreComponent,
    // TODO #import-html: remove the templateUrl property.
  });
