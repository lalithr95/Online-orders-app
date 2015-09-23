(function () {
    'use strict';

    // Cordova.js for non-cordova browsers

    // Global flag that can be checked for delayed device ready events
    window.dgIsDeviceReady = false;

    // Global flag to tell us if this is not running real cordova, i.e. it's running on the browser
    window.isDummyCordova = true;

    setTimeout(function () {
        // Trigger device ready
        try {
            var e = document.createEvent('Events');
            e.initEvent('deviceready');
            document.dispatchEvent(e);
        } catch (err) {
            console.warn(err.message, err.stack);
        }
        window.dgIsDeviceReady = true;
    }, 100);

})();
