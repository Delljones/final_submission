import 'mdb-vue-ui-kit/css/mdb.min.css'
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import './main.css';
import './views/viewStyling/home.css';
import Carousel from "@/components/Carousel";
import ModalPopup from "@/components/SoundPopup";
import MainButtons from "@/components/MainButtons";
// importing Adding the Icon library for Footer icons
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas, faBaby} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons";

// Adding the Icon library for Footer
library.add(fas)
library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)
library.add(faYoutube)
library.add(faBaby)

createApp(App).use(router)
    .component(
        'font-awesome-icon',
        FontAwesomeIcon,
        Carousel,
        MainButtons,
        ModalPopup,
        )
    .mount("#app");


