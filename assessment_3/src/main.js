import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import './main.css'
import './views/viewStyling/home.css'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";


library.add(fas);
library.add(faFacebook)
library.add(faInstagram)


createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
