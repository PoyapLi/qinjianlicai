import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money',
        meta: {
            title: '勤俭记账'
        }
    },
    {
        path: '/money',
        component: Money,
        meta: {
            title: '勤俭记账'
        }
    },
    {
        path: '/labels',
        component: Labels,
        meta: {
            title: '勤俭记账'
        }
    },
    {
        path: '/statistics',
        component: Statistics,
        meta: {
            title: '勤俭记账'
        }
    },
    {
        path: '/labels/edit/:id',
        component: EditLabel,
        meta: {
            title: '勤俭记账'
        }
    },
    {
        path: '*',
        component: NotFound
    },

    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    routes
});

export default router;
