/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import GbpGameView from '../views/GbpGameView.vue';

import '../_statics/css/gbp.css';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(GbpGameView, {
        props: {
            clipPaths: [
                {
                  x: 768,
                  y: 16,
                  width: 1920 * 0.58,
                  height: 1728 * 0.58
                }
            ]
        }
    })
});
