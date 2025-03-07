import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser, faCog, faBell, faEnvelope, faChartBar, faFile, faQuestionCircle, faShieldAlt, faSignOutAlt, faChartPie, faCalculator, faNewspaper, faCoins, faBook, faBuilding, faDesktop, faCircleDollarToSlot, faClipboardList, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

library.add(faChartPie, faCalculator, faNewspaper, faCoins, faBook, faBuilding, faDesktop, faCircleDollarToSlot, faClipboardList, faUser, faGear, faRightFromBracket);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
