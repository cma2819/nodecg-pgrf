/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import ThreeDsGameView from '../views/ThreeDsGameView.vue';

import '../_statics/css/3ds.css';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(ThreeDsGameView, {
        props: {
            clipPaths: [
                {
                  x: 24,
                  y: 105,
                  width: 1920 * 0.62,
                  height: 1152 * 0.62
                },
                {
                  x: 1238,
                  y: 330,
                  width: 1920 * 0.34,
                  height: 1440 * 0.34
                }
            ]
        }
    })
});
