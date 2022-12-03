window._ = require('lodash');

try {
    require('bootstrap');
} catch (e) {
}
import jquery from 'jquery'

window.$ = jquery
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

 import Echo from 'laravel-echo';

import Pusher from 'pusher-js'

// window.Pusher = new Pusher('glary656598665', {
//     cluster: 'mt1',
//     // userAuthentication: {
//     //     endpoint: "/pusher/user-auth",
//     //     // auth: {
//     //     //     headers: {
//     //     //         'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//     //     //     }
//     //     // },
//     //     transport: "ajax",
//     //     params: {},
//     //     headers: {},
//     //     customHandler: null,
//     // },
//     authEndpoint: '/broadcasting/auth',
//     // encrypted:true,
//     // auth: {
//     //     headers: {
//     //         'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//     //     }
//     // },
//     enabledTransports: ['ws'],
//     wsPort: 6001,
//     forceTLS: false,
//     wsHost: 'socket-amer.test',
//     disableStats: true,
// });

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: window.location.hostname,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    enabledTransports: ["ws"],
});
