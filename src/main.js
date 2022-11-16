import { createApp } from 'vue'
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import './style.css'
import App from './App.vue'
const oktaAuth = new OktaAuth({
  clientId: "someclientid",
  issuer: "https://example.okta.com",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"]
});

const vuetify = createVuetify({
  components,
  directives
});
createApp(App)
  .use(OktaVue, { oktaAuth })
  .use(vuetify)
  .mount('#app')
