import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import GameDisplay from "./components/GameDisplay.vue"
import GameControls from "./components/GameControls.vue"
import RestartScreen from "./components/RestartScreen.vue"

const app = createApp(App);
app.component("game-display", GameDisplay);
app.component("game-controls", GameControls);
app.component("restart-screen", RestartScreen);
app.mount("#app");
