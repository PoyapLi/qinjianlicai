import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

router.beforeEach((to, from, next)=>{
    // @ts-ignore
    if(to.meta.title) {
        // @ts-ignore
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 200);
    }, 0);
};

if (document.documentElement.clientWidth > 500) {
    window.alert('请用手机打开本页面，保证使用体验');
    const img = document.createElement('img');
    img.src = require('../public/qrcode.png');
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.width = '300px';
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    document.body.appendChild(img);
}
if (navigator.userAgent.match(/(iPad|iPhone|iPod|Android|Silk)/gi))
    document.title = "勤俭理财";