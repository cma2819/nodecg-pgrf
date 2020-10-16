/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../../plugin/store';
import vuetify from '../../plugin/vuetify';
import DsGameView from '../views/DsGameView.vue';

import '../_statics/css/ds.css';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(DsGameView, {
        props: {
            clipPaths: [
                {
                  x: 48,
                  y: 120,
                  width: 1920 * 0.56,
                  height: 1440 * 0.56
                },
                {
                  x: 1159,
                  y: 408,
                  width: 1920 * 0.36,
                  height: 1440 * 0.36
                }
            ]
        }
    })
});
