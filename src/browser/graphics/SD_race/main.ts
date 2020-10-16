/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import RaceGameView from '../views/RaceGameView.vue';

import '../_statics/css/sd2.css';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(RaceGameView, {
        props: {
            clipPaths: [
                {
                  x: 103,
                  y: 110,
                  width: 1920 * 0.42,
                  height: 1440 * 0.42
                },
                {
                  x: 1012,
                  y: 110,
                  width: 1920 * 0.42,
                  height: 1440 * 0.42
                }
            ]
        }
    })
});
