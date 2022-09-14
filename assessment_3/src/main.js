import 'mdb-vue-ui-kit/css/mdb.min.css'
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import './main.css';
import './views/viewStyling/home.css';
import "./components/Carousel";

// importing Adding the Icon library for Footer icons
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
// Adding the Icon library for Footer
library.add(fas);
library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)
library.add(faYoutube)

createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon, )
    .mount("#app");


