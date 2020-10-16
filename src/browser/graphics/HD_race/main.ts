/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import RaceGameView from '../views/RaceGameView.vue';

import '../_statics/css/hd2.css';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(RaceGameView, {
        props: {
            clipPaths: [
                {
                  x: 24,
                  y: 150,
                  width: 1920 * 0.48,
                  height: 1080 * 0.48
                },
                {
                  x: 969,
                  y: 150,
                  width: 1920 * 0.48,
                  height: 1080 * 0.48
                }
            ]
        }
    })
});
