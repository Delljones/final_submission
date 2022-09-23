
// Main JS handles all of the plug ins and compartments -
// It is where the project is launched from on the local host

import 'mdb-vue-ui-kit/css/mdb.min.css'
import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import '@/views/viewStyling/main.css';
import '@/views/viewStyling/home.css';
import Carousel from "@/components/Carousel";
import ModalPopup from "@/components/SoundPopup";
import MainButtons from "@/components/MainButtons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBaby, fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube,} from "@fortawesome/free-brands-svg-icons";

// Adding the Font Awesome Icon library for Footer
library.add(fas)
library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)
library.add(faYoutube)
library.add(faBaby)

// Using the router in the create App section along with other plugins
createApp(App).use(router)
    .component(
        'font-awesome-icon',
        FontAwesomeIcon,
        Carousel,
        MainButtons,
        ModalPopup,
        )
    .mount("#app");


