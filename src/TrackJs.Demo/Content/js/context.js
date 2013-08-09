﻿(function (console, $) {

    // HERES ABOUT WHERE WE LEFT OFF WITH TRANSMISSION, CONTEXT ABSTRACTED

    var getContext = function() {};

    var transmissionCount = 0,
    lastTransmissionAttempt = new Date().getTime();
    console.transmit = function (severity, message) {

        var now = new Date().getTime();
        if (lastTransmissionAttempt + 1000 >= now) { // if in cooldown period
            lastTransmissionAttempt = now;
            transmissionCount++;
            if (transmissionCount > 10) return;
        } else {
            transmissionCount = 0;
            lastTransmissionAttempt = now;
        }

        var payload = {
            timestamp: new Date().toISOString(),
            severity: severity,
            message: message,
            context: getContext()
        };

        $.ajax({
            data: JSON.stringify(payload),
            url: '/log',
            type: 'POST',
            contentType: 'application/json'
        });
    };
    











    // SIMPLE USER CONTEXT
    

    //getContext = function() {
    //    return {
    //        userAgent: window.navigator.userAgent,
    //        location: window.location.toString(),
    //        windowDimension: {
    //            width: $(window).width(),
    //            height: $(window).height()
    //        }
    //    };
    //};




})(window.console, window.jQuery);
