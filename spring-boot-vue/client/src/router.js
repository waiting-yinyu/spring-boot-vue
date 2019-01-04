import Auth from "@okta/okta-vue";  
import Vue from 'vue'  
import Router from 'vue-router'  
import Todos from './components/Todos'  
  
Vue.use(Auth, {  
  issuer: 'https://dev-145840.oktapreview.com/oauth2/default',  
  client_id: '0oaiqfbnryjtKBata0h7',  
  redirect_uri: window.location.origin + '/implicit/callback',  
  scope: 'openid profile email'  
});  
  
Vue.use(Router);  
  
let router = new Router({  
  mode: 'history',  
  routes: [  
    {  
      path: '/',  
      name: 'Todos',  
      component: Todos,  
      meta: {  
        requiresAuth: true  
      }  
    },  
	{  
	path: '/implicit/callback',  
	component: Auth.handleCallback(),  
	},  
  ]  
});  
  
router.beforeEach(Vue.prototype.$auth.authRedirectGuard());  
  
export default router;