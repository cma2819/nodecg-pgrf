/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import SoloGameView from '../views/SoloGameView.vue';

import '../_statics/css/sd1.css';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(SoloGameView, {
        props: {
            clipPaths: [
                {
                  x: 640,
                  y: 120,
                  width: 1920 * 0.62,
                  height: 1440 * 0.62
                }
            ]
        }
    })
});
